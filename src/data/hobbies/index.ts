import { hobbies as enHobbies } from "./en";
import { hobbies as plHobbies } from "./pl";

import type { Language } from "../../i18n";

export type HobbySlug =
	| "travel"
	| "diy"
	| "tabletop-games"
	| "photography";

export interface Hobby {
	slug: HobbySlug;
	title: string;
	summary: string;
	href: string;
}

export function getHobbies(lang: Language): Hobby[] {
	return lang === "pl" ? plHobbies : enHobbies;
}