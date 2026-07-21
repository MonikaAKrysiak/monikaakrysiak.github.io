import type { Language } from "../../../i18n";

import { portfolioWebsite as en } from "./en";
import { portfolioWebsite as pl } from "./pl";

const portfolioWebsiteByLanguage: Record<Language, typeof en> = {
	en,
	pl,
};

export function getPortfolioWebsite(lang: Language) {
	return portfolioWebsiteByLanguage[lang];
}