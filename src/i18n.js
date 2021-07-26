import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import locizeLastUsed from 'locize-lastused';
import { locizePlugin } from 'locize';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY,
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: process.env.REACT_APP_LOCIZE_VERSION
};

if (!isProduction) i18n.use(locizeLastUsed);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .use(locizeLastUsed)
  .use(locizePlugin)
  .init({
    debug: !isProduction,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: !isProduction
  });

export default i18n;