import type { Language } from "../../../i18n";

import { securityKnowledgeBase as en } from "./en";
import { securityKnowledgeBase as pl } from "./pl";

const securityKnowledgeBaseByLanguage: Record<Language, typeof en> = {
	en,
	pl,
};

export function getSecurityKnowledgeBase(lang: Language) {
	return securityKnowledgeBaseByLanguage[lang];
}