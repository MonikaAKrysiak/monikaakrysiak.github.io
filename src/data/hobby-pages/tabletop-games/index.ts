import type { Language } from "../../../i18n";
import type { NavigationItem } from "../../../types/navigation";

import { en } from "./en";
import { pl } from "./pl";

const contentByLanguage: Record<Language, TabletopGamesPageContent> = {
    en,
    pl,
};

export const getGames = (
    lang: Language,
): TabletopGamesPageContent => {
    return contentByLanguage[lang];
};

export interface TabletopGamesPageContent {
    title: string;
    introduction: string[];
    genresTitle: string;
    genres: string[];
    highlightsTitle: string;
    highlights: {
        icon: "books" | "puzzles" | "community";
        title: string;
        description: string;
    }[];
    whyRpgTitle: string;
    whyRpg: string;
    storiesTitle: string;
    storiesIntroduction: string;
    stories: {
        title: string;
        summary: string;
        paragraphs: string[];
        imageKey: "rpgDice" | "valentia" | "sophieChoices";
        imageAlt: string;
        imagePosition: string;
        imageFit: "cover" | "contain";
    }[];
    beyondPlayingTitle: string;
    beyondPlaying: {
        title: string;
        description: string;
    }[];
}

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
					? "Historie z sesji"
					: "Stories from the table",
			href: "#tabletop-games-stories",
		},
		{
			label:
				lang === "pl"
					? "Nie tylko granie"
					: "Beyond playing",
			href: "#tabletop-games-beyond-playing",
		},
	];
};