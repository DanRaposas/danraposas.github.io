// Function for toggling the navbars
function toggleNavbar() {
    const windowWidth = window.outerWidth;
    const largeNav = document.querySelector('nav#large-nav');
    const largeNavLinks = document.querySelectorAll('a#large-nav-link');
    const mobileNav = document.querySelector('nav#mobile-nav');
    const mobileNavLinks = document.querySelectorAll('a#mobile-nav-link');

    (windowWidth < 1024) ? largeNav.classList.add('hidden') : largeNav.classList.remove('hidden');
    (windowWidth < 1024) ? mobileNav.classList.remove('hidden') : mobileNav.classList.add('hidden');

    for (const largeNavLink of largeNavLinks) {
        (windowWidth < 1024) ? largeNavLink.classList.add('hidden') : largeNavLink.classList.remove('hidden');
    }

    for (const mobileNavLink of mobileNavLinks) {
        (windowWidth < 1024) ? mobileNavLink.classList.remove('hidden') : mobileNavLink.classList.add('hidden');
    }
}

window.addEventListener('alpine:init', () => {
    Alpine.data('nav', () => ({
        'toggle': false,
    }));
});

window.addEventListener('DOMContentLoaded', () => {
    toggleNavbar();
});

window.addEventListener('resize', () => {
    toggleNavbar();
});
