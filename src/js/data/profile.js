export const profile = {
    details: {
        name: "Adonis Maniego",
        position: "Web Developer"
    },
    mockupTerminal: {
        icons: [
            `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="terminal-btn"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                    />
                </svg>
            `,
            `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="terminal-btn"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                </svg>
            `,
            `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="terminal-btn hover:bg-persian-plum-500 active:bg-persian-plum-700"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
            `
        ],
        content: {
            hobbies: {
                title: `> dan.<span class="terminal-keyword">hobbies</span>`,
                list: [
                    "Cycling",
                    "DIY Crafts",
                    "Programming",
                    "Gaming",
                ]
            },
            contact: {  
                title: `> dan.<span class="terminal-keyword">contact</span>`,
                list: [
                    `<a
                            href="https://github.com/DanRaposas"
                            target="_blank"
                            class="terminal-highlight"
                        >GitHub</a>`,
                    `<a
                            href="https://linkedin.com/in/adonis-maniego-449774300"
                            target="_blank"
                            class="terminal-highlight"
                        >LinkedIn</a>`,
                    `<a
                            href="mailto:danraposas3@gmail.com"
                            target="_blank"
                            class="terminal-highlight"
                        >danraposas3@gmail.com</a>`
                ]
            },
            education: {  
                title: `> dan.<span class="terminal-keyword">education</span>`,
                list: [
                    `<a
                            href="https://www.spcba.edu.ph/"
                            target="_blank"
                            class="terminal-highlight"
                        >BS in Information Technology</a>`,
                    "Salutatorian",
                    "Magna Cum Laude"
                ]
            },
            // certifications: {},
            experience: {  
                title: `> dan.<span class="terminal-keyword">experience</span>`,
                list: [
                    `<a
                            href="https://www.devteam.com/"
                            target="_blank"
                            class="terminal-highlight"
                        >DevTeam</a>`,
                    "Junior Magento Developer"
                ]
            },
            programmingLanguages: {  
                title: `> dan.<span class="terminal-keyword">programming.languages</span>`,
                list: [
                    "PHP",
                    "JavaScript",
                    "TypeScript",
                    "HTML5",
                    "CSS3",
                ]
            },
            frameworksLibraries: {  
                title: `> dan.<span class="terminal-keyword">programming.frameworksLibraries</span>`,
                list: [
                    "Laravel",
                    "Livewire",
                    "Magento 2",
                    "Alpine.js",
                    "React",
                    "jQuery",
                    "Knockout.js",
                    "LESS",
                    "Sass",
                    "Tailwind CSS",
                    "Bootstrap",
                ]
            },
        }
    }
};