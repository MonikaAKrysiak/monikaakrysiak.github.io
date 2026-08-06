import { en } from "./en";
import { pl } from "./pl";

import type { Language } from "../../../i18n";

export type DiyHighlight = {
	title: string;
	description: string;
};

export type DiyStory = {
	label: string;
	title: string;
	summary: string;
	paragraphs: string[];

	image: ImageMetadata;
	imageAlt: string;
	imagePosition?: string;
};

export type DiyPlan = {
	title: string;
	description: string;
};

export type DiyGalleryImage = {
	alt: string;
};

export type DiyPageContent = {
	title: string;
	introduction: string[];

	highlightsTitle: string;
	highlights: DiyHighlight[];

	originTitle: string;
	originParagraphs: string[];

	storiesTitle: string;
	storiesIntroduction: string;
	stories: DiyStory[];

	quote: string;

	lookingAheadTitle: string;
	lookingAheadIntroduction: string;
	lookingAhead: DiyPlan[];

	galleryTitle: string;
	galleryIntroduction: string;
	galleryImages: DiyGalleryImage[];
};

export const getDiy = (
	lang: Language,
): DiyPageContent => {
	return lang === "pl"
		? pl
		: en;
};

export const getDiyNavigation = (
	lang: Language,
) => {
	const diy = getDiy(lang);

	return [
		{
			label: diy.title,
			href: "#diy-about",
		},
		{
			label: diy.storiesTitle,
			href: "#diy-stories",
		},
		{
			label: diy.galleryTitle,
			href: "#diy-gallery",
		},
	];
};