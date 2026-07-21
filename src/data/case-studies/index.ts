import type { Language } from "../../i18n";

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