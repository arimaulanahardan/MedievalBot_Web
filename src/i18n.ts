import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'https://forgebot.io'

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: `${getCurrentHost}/language/{{lng}}.json`,
        },
    });

export default i18n;
