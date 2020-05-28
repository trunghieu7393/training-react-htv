import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_vn from "./translations/vn/common.json";
import common_en from "./translations/en/common.json";

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'vn',
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