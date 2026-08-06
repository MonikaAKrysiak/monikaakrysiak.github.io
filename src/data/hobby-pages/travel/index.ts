import { en } from "./en";
import { pl } from "./pl";

import type { Language } from "../../../i18n";

export type TravelHighlight = {
	title: string;
	description: string;
};

export type TravelStory = {
	year: string;
	title: string;
	summary: string;
	paragraphs: string[];
};

export type TravelPlan = {
	title: string;
	description: string;
};

export type TravelPageContent = {
	title: string;
	introduction: string[];

	highlightsTitle: string;
	highlights: TravelHighlight[];

	originTitle: string;
	originParagraphs: string[];

	storiesTitle: string;
	storiesIntroduction: string;
	stories: TravelStory[];

	quote: string;

	lookingAheadTitle: string;
	lookingAhead: TravelPlan[];

	galleryTitle: string;
	galleryIntroduction: string;
	galleryImages: TravelGalleryImage[];

	stravaLabel: string;
	instagramLabel: string;
};

export const getTravel = (
	lang: Language,
): TravelPageContent => {
	return lang === "pl"
		? pl
		: en;
};

export const getTravelNavigation = (lang: Language) => {
	const travel = getTravel(lang);

	return [
		{
			label: travel.title,
			href: "#travel-about",
		},
		{
			label: travel.storiesTitle,
			href: "#travel-stories",
		},
		{
			label: travel.galleryTitle,
			href: "#travel-gallery",
		},
	];
};

export type TravelGalleryImage = {
	alt: string;
};