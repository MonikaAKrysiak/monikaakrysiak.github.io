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
export interface AdjacentWork {
	previous?: WorkItem;
	next?: WorkItem;
}

export function getAdjacentWork(
	lang: Language,
	currentHref: string,
): AdjacentWork {
	const work = getWork(lang);
	const currentIndex = work.findIndex(
		(item) => item.href === currentHref,
	);

	if (currentIndex === -1) {
		return {};
	}

	return {
		previous: work[currentIndex - 1],
		next: work[currentIndex + 1],
	};
}