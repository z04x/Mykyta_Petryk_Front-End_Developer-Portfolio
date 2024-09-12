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
        // Добавьте другие переводы здесь
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
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', // установите язык по умолчанию
    fallbackLocale: 'en',
    messages,
})

export default i18n