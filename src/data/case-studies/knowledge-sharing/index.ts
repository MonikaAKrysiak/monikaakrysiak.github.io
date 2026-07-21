import type { Language } from "../../../i18n";

import { knowledgeSharing as en } from "./en";
import { knowledgeSharing as pl } from "./pl";

const knowledgeSharingByLanguage: Record<Language, typeof en> = {
	en,
	pl,
};

export function getKnowledgeSharing(lang: Language) {
	return knowledgeSharingByLanguage[lang];
}