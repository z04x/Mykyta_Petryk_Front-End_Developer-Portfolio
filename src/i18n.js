import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        header: {
            about: 'About',
            projects: 'Projects',
            contacts: 'Contacts'
        },
        // Добавьте другие переводы здесь
    },
    de: {
        header: {
            about: 'Über mich',
            projects: 'Projekte',
            contacts: 'Kontakte'
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