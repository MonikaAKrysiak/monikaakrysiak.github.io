import type { Language } from "../../../i18n";
import type { NavigationItem } from "../../../types/navigation";

import { en } from "./en";
import { pl } from "./pl";

export const getGames = (lang: Language) => {
	return lang === "pl" ? pl : en;
};

export const getTabletopGamesNavigation = (
	lang: Language,
): NavigationItem[] => {
	return [
		{
			label:
				lang === "pl"
					? "O grach"
					: "About games",
			href: "#tabletop-games-about",
		},
		{
			label:
				lang === "pl"
					? "Nie tylko granie"
					: "Beyond playing",
			href: "#tabletop-games-beyond-playing",
		},
		{
			label:
				lang === "pl"
					? "Historie z sesji"
					: "Stories from the table",
			href: "#tabletop-games-stories",
		},
	];
};