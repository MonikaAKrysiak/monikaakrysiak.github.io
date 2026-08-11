import type { Language } from "../../i18n";

export function createCaseStudyGetter<T>(
    en: T,
    pl: T,
): (lang: Language) => T {
    const byLanguage: Record<Language, T> = {
        en,
        pl,
    };

    return (lang) => byLanguage[lang];
}
export interface CaseStudy {
	title: string;
	summary: string;

	focusAreas: string[];

	action: {
		label: string;
		href: string;
		icon: string;
	};
}

export type CaseStudyId =
	| "portfolio-website"
	| "security-knowledge-base"
	| "beyond-testing"
	| "knowledge-sharing";