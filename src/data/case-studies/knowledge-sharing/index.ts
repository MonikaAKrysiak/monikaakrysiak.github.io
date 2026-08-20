import type { ImageMetadata } from "astro";
import { createCaseStudyGetter } from "..";

import { knowledgeSharing as en } from "./en";
import { knowledgeSharing as pl } from "./pl";

export interface KnowledgeSharingEvidenceLink {
    label: string;
    href: string;
}

export interface KnowledgeSharingEvidenceItem {
    title: string;
    description: string;
    image?: ImageMetadata;
    alt?: string;
    secondaryImage?: ImageMetadata;
    secondaryImageAlt?: string;
    videoSrc?: string;
    links?: KnowledgeSharingEvidenceLink[];
    secondaryImageLarge?: boolean;
}

export interface KnowledgeSharingPracticalExample {
    title: string;
    context: string;
    approach: string;
    outcome: string;
    meta: {
        label: string;
        value: string;
    }[];
    evidence?: KnowledgeSharingEvidenceItem[];
}

export const getKnowledgeSharing = createCaseStudyGetter(en, pl);