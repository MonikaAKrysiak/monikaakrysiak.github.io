import type { Language } from "../../i18n";

import { work as enWork } from "./en";
import { work as plWork } from "./pl";

export interface WorkItem {
	title: string;
	summary: string;
	focusAreas: string[];
	href: string;
}

const workByLanguage: Record<Language, WorkItem[]> = {
	en: enWork,
	pl: plWork,
};

export function getWork(lang: Language): WorkItem[] {
	return workByLanguage[lang];
}