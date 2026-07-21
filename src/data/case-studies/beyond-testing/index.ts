import type { Language } from "../../../i18n";

import { beyondTesting as en } from "./en";
import { beyondTesting as pl } from "./pl";

const beyondTestingByLanguage: Record<Language, typeof en> = {
	en,
	pl,
};

export function getBeyondTesting(lang: Language) {
	return beyondTestingByLanguage[lang];
}