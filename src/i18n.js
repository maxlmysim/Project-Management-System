import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  actionsRU,
  authRU,
  fieldsRU,
  profileRU,
  welcomeRU,
  alertRU,
  modalTitleRU,
} from './constants/translationRU';
import {
  actionsEN,
  authEN,
  fieldsEN,
  profileEN,
  welcomeEN,
  alertEN,
  modalTitleEN,
} from './constants/translationEN';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: welcomeEN,
          profile: profileEN,
          actions: actionsEN,
          auth: authEN,
          fields: fieldsEN,
          alert: alertEN,
          modalTitle: modalTitleEN,
        },
      },
      ru: {
        translation: {
          welcome: welcomeRU,
          profile: profileRU,
          actions: actionsRU,
          auth: authRU,
          fields: fieldsRU,
          alert: alertRU,
          modalTitle: modalTitleRU,
        },
      },
    },
  });

export default i18n;
