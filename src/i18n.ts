import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationVie from '../src/translation/translationVie.json';

const resources = {
	vie: {
		translation: translationVie,
	},
};

i18n.use(initReactI18next).init({
	fallbackLng: 'vie',
	resources,
	lng: 'vie',
	debug: true,
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
});

export default i18n;
