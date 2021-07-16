import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend'

const locizeOptions = {
  projectId: '1b4f4a8e-2561-4fcc-9047-193df3a5ab76',
  apiKey: 'a0deb8f9-1ba5-468b-82a4-6d93816becac', // YOU should not expose your apps API key to production!!!
  referenceLng: 'en',
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    saveMissing: true,
    backend: locizeOptions
  });

export default i18n;