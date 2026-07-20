import { en } from "./en";
import { pl } from "./pl";

export const translations = {
	en,
	pl,
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
	return translations[lang];
}