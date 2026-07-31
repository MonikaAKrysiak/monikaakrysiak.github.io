import type { ImageMetadata } from "astro";

export interface LocalizedText {
	en: string;
	pl: string;
}

export interface HobbyGalleryImage {
	image: ImageMetadata;
	alt: LocalizedText;
	caption?: LocalizedText;
}

export interface HobbyPage {
	title: string;

	introduction: string[];

	gallery: HobbyGalleryImage[];

	externalLink?: {
		label: string;
		href: string;
	};
}