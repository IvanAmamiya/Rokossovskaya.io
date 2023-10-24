import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';

import TranslationCN from '../locale/TranslationCN.json';
import TranslationEN from '../locale/TranslationEN.json';
import TranslationJP from '../locale/TranslationJP.json';

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {
  en: {
    translation: TranslationEN,
  },

  cn: {
    translation: TranslationCN,
  },

  jp: {
    translation: TranslationJP,
  },
};

i18next

  .use(initReactI18next)

  .init({
    resources,

    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
  .then(function (t) {
    t('key');
  });

export default i18next;
