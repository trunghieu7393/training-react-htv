import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_vn from "./locales/vn/translation.json";
import common_en from "./locales/en/translation.json";
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: common_en // 'translation' is our custom namespace
      },
      vn: {
        translation: common_vn
      },
    },
  })

export default i18n;