// Function for showing or hiding the navbars
function toggleNav() {
    const windowWidth = window.outerWidth;
    const largeNav = document.querySelector('nav#large-nav');
    const largeNavLinks = document.querySelectorAll('a#large-nav-link');
    const mobileNav = document.querySelector('nav#mobile-nav');
    const mobileNavLinks = document.querySelectorAll('a#mobile-nav-link');

    // Executed for mobile screens
    if(windowWidth < 1024) {
        largeNav.classList.add('hidden');
        mobileNav.classList.remove('hidden');

        for (const largeNavLink of largeNavLinks) {
            largeNavLink.classList.add('hidden');
        }
    
        for (const mobileNavLink of mobileNavLinks) {
            mobileNavLink.classList.remove('hidden');
        }

        return;
    }

    // Executed for large screens
    largeNav.classList.remove('hidden');
    mobileNav.classList.add('hidden');

    for (const largeNavLink of largeNavLinks) {
        largeNavLink.classList.remove('hidden');
    }

    for (const mobileNavLink of mobileNavLinks) {
        mobileNavLink.classList.add('hidden');
    }
}

window.addEventListener('alpine:init', () => {
    Alpine.data('nav', () => ({
        'toggle': false,
    }));
});

window.addEventListener('DOMContentLoaded', () => {
    toggleNav();
});

window.addEventListener('resize', () => {
    toggleNav();
});
