import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        header: {
            about: 'About',
            projects: 'Projects',
            contacts: 'Contacts'
        },
        HeroSection: {
            title: 'Developer',
            description: 'I\'m a developer who doesn\'t just write code, but creates solutions that work flawlessly. Specializing in React, Vue, and TypeScript, I make projects scalable, fast, and user-friendly. My goal isn\'t just the result, but to deliver a wow-factor with every line of code! 🚀',
            viewProjects: 'View Projects',
        },
        WorkExperience: {
            title: 'Frontend Experience',
        },
        aboutMe: {
            title: 'About Me',
            description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus fermentum turpis ullamcorper tortor.',
            frontEndSkills: `
                <span class="highlight">Frontend Development:</span> React, Vue, TypeScript, JavaScript (ES6+)
                <br>
                <span class="highlight">Development Tools:</span> Gulp, Webpack, Git, Jira, GitHub
            `,
            stylesSkills: `
                <span class="highlight">UI/UX:</span> Material-UI, responsive design (CSS3, SCSS, Flexbox, Grid), animations
                <br>
                <span class="highlight">Performance Optimization:</span> Lazy Loading, Code Splitting, Load Time Optimization
                <br>
                <span class="highlight">Build & Automation:</span> Gulp, Webpack, CI/CD Pipelines
            `,
            dataSkills: `
                <span class="highlight">API and Integrations:</span> REST API, WebSocket, SDKs (Telegram, Jira, GitHub)
                <br>
                <span class="highlight">Basic Python Knowledge:</span> Simple automations and script creation
            `
        },
        projects: {
            title: 'MyProjects',
            forgetai: 'Development and implementation of AI solutions such as ChatGPT and Mistral for deep user interactions \n Creation of automated tools for generating sales-promoting prompts with advanced analytics \n Use of React, React Hooks, React Router, and Material-UI (MUI) for scalable user interfaces \n Integration of SDKs for Telegram, Jira, and GitHub to improve team collaboration \n Optimization of the platform for the introduction of new models and features',
        },
        Footer: {
            moreInfo: 'More Info',
            etw: 'Developer',
            about: 'About',
            projects: 'Projects',
            articles: 'Articles',
            contacts: 'Contacts',
            landingCreators: 'Landing Creators',
            frontendReferences: 'Frontend References:',
            uxUiDesign: 'UX/UI Design:',
            location: 'Germany, Essen',
        }
    },
    de: {
        header: {
            about: 'Über mich',
            projects: 'Projekte',
            contacts: 'Kontakte'
        },
        HeroSection: {
            title: 'Entwickler',
            description: 'Ich bin ein Entwickler, der nicht nur Code schreibt, sondern Lösungen schafft, die perfekt funktionieren. Spezialisiert auf React, Vue und TypeScript, mache ich Projekte skalierbar, schnell und benutzerfreundlich. Mein Ziel ist nicht nur das Ergebnis, sondern die Lieferung eines "Wow-Faktors" mit jeder Zeile Code! 🚀',
            viewProjects: 'Projekte ansehen',
        },
        WorkExperience: {
            title: 'Frontend-Erfahrung',
        },
        aboutMe: {
            title: 'Über mich',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            frontEndSkills: `
                <span class="highlight">Frontend-Entwicklung:</span> React, Vue, TypeScript, JavaScript (ES6+)
                <br>
                <span class="highlight">Entwicklungstools:</span> Gulp, Webpack, Git, Jira, GitHub
            `,
            stylesSkills: `
                <span class="highlight">UI/UX:</span> Material-UI, responsives Design (CSS3, SCSS, Flexbox, Grid), Animationen
                <br>
                <span class="highlight">Leistungsoptimierung:</span> Lazy Loading, Code Splitting, Ladezeitoptimierung
                <br>
                <span class="highlight">Build & Automatisierung:</span> Gulp, Webpack, CI/CD-Pipelines
            `,
            dataSkills: `
                <span class="highlight">API und Integrationen:</span> REST API, WebSocket, SDKs (Telegram, Jira, GitHub)
                <br>
                <span class="highlight">Grundkenntnisse in Python:</span> Einfache Automatisierungen und Skripterstellung
            `
        },
        projects: {
            title: 'Meine Projekte',
            forgetai: 'Entwicklung und Implementierung von KI-Lösungen wie ChatGPT und Mistral für tiefgehende Nutzerinteraktionen \n Erstellung automatisierter Tools zur Generierung verkaufsfördernder Prompts mit fortschrittlicher Analytik \n Nutzung von React, React Hooks, React Router und Material-UI (MUI) für skalierbare Benutzeroberflächen \n Integration von SDKs für Telegram, Jira und GitHub zur Verbesserung der Team-Zusammenarbeit \n Optimierung der Plattform für die Einführung neuer Modelle und Funktionen',
        },
        Footer: {
            moreInfo: 'Mehr Info',
            etw: 'Entwickler',
            about: 'Über mich',
            projects: 'Projekte',
            contacts: 'Kontakte',
            landingCreators: 'Landing-Ersteller',
            frontendReferences: 'Frontend-Referenzen:',
            uxUiDesign: 'UX/UI-Design:',
            location: 'Deutschland, Essen',
        }

    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', // установите язык по умолчанию
    fallbackLocale: 'en',
    messages,
})

export default i18n