// Imports
import { projects } from './data/projects'
import { demos } from './data/demos'
import { profile } from './data/profile'
import { footer } from './data/footer'
import { nav } from './data/nav'

window.addEventListener('alpine:init', () => {
    Alpine.data('navData', () => ({
        data: nav,
        'toggle': false,

        init() {
            window.addEventListener('DOMContentLoaded', () => {
                this.toggleNav();
            });

            window.addEventListener('resize', () => {
                this.toggleNav();
            });
        },

        toggleNav() {
            let viewport = window.outerWidth;
            let isMobile = viewport < 1024;
            this.toggle = (isMobile) ? false : true;
        }
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