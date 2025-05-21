// Imports
import { projects } from './data/projects'
import { demos } from './data/demos'
import { profile } from './data/profile'
import { footer } from './data/footer'

// Functions
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

window.addEventListener('DOMContentLoaded', () => {
    toggleNavbar();
});

window.addEventListener('resize', () => {
    toggleNavbar();
});

window.addEventListener('alpine:init', () => {
    Alpine.data('nav', () => ({
        'toggle': false,
    }));

    Alpine.data('cards', () => ({
        projectData: projects,
        demoData: demos,
        profileData: profile,
        badgeColor(badgeValue) {
            return (badgeValue === true) ? "green-outline-badge" : "gray-outline-badge";
        },
        badgeText(badgeName) {
            const name = badgeName.toLowerCase();
            
            const allUpper = [
                'html5', 
                'css3', 
                'php'
            ];

            const specialCase = {
                javascript: "JavaScript",
                alpinejs: "Alpine.js",
                jquery: "jQuery"
            }

            // Checks if a string should be all uppercase, use a special case, or sentence case
            if (allUpper.includes(name)) {
                return name.toUpperCase();
            } else if(Object.keys(specialCase).includes(name)) {
                return specialCase[name];
            } else {
                return name.charAt(0).toUpperCase() + name.slice(1);
            }
        },
        terminalList(list, currentIndex, value) {
            const listLimit = list.length - 1;
            return (listLimit === currentIndex) ? `'${value}'` : `'${value}', `;
        }
    }));

    Alpine.data('footerData', () => ({
        data: footer
    }));
});