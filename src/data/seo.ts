import type { Language } from "../i18n";

export interface SeoData {
	title: string;
	description: string;
}

const homepageSeo: Record<Language, SeoData> = {
	en: {
		title: "Monika Krysiak – QA Engineer",
		description:
			"QA Engineer specialising in Application Security, quality engineering and knowledge sharing. Explore selected case studies and a portfolio built with accessibility, performance and security in mind.",
	},
	pl: {
		title: "Monika Krysiak – QA Engineer",
		description:
			"Portfolio Moniki Krysiak prezentujące doświadczenie w Quality Assurance, Application Security, inżynierii jakości oraz dzieleniu się wiedzą. Poznaj wybrane case studies i projekt portfolio tworzony z myślą o dostępności, wydajności i bezpieczeństwie.",
	},
};

const portfolioWebsiteSeo: Record<Language, SeoData> = {
	en: {
		title: "Portfolio Website – Monika Krysiak",
		description:
			"How I designed and built this portfolio using Astro with a strong focus on accessibility, performance, maintainability and security.",
	},
	pl: {
		title: "Budowa portfolio – Monika Krysiak",
		description:
			"Case study pokazujące, jak zaprojektowałam i zbudowałam portfolio z wykorzystaniem Astro, semantycznego HTML oraz nowoczesnego CSS, dbając o dostępność, wydajność i bezpieczeństwo.",
	},
};

const securityKnowledgeBaseSeo: Record<Language, SeoData> = {
	en: {
		title: "OWASP ASVS Knowledge Base – Monika Krysiak",
		description:
			"A practical knowledge base that helps QA teams understand, learn and apply OWASP ASVS requirements in everyday testing.",
	},
	pl: {
		title: "Baza wiedzy OWASP ASVS – Monika Krysiak",
		description:
			"Case study przedstawiające praktyczną bazę wiedzy pomagającą zespołom QA zrozumieć, poznawać i stosować wymagania OWASP ASVS w codziennej pracy.",
	},
};

const beyondTestingSeo: Record<Language, SeoData> = {
	en: {
		title: "Beyond Testing – Monika Krysiak",
		description:
			"Real examples of improving software quality through business analysis, collaboration, product thinking and proactive problem solving.",
	},
	pl: {
		title: "Beyond Testing – Monika Krysiak",
		description:
			"Case study pokazujące, jak analiza biznesowa, współpraca, myślenie produktowe i proaktywne rozwiązywanie problemów pomagają budować lepszą jakość oprogramowania.",
	},
};

const knowledgeSharingSeo: Record<Language, SeoData> = {
	en: {
		title: "Knowledge Sharing – Monika Krysiak",
		description:
			"Workshops, mentoring, documentation and educational materials designed to help teams learn and build quality together.",
	},
	pl: {
		title: "Dzielenie się wiedzą – Monika Krysiak",
		description:
			"Case study o warsztatach, mentoringu, dokumentacji i materiałach edukacyjnych wspierających rozwój zespołów oraz budowanie jakości.",
	},
};

export function getHomepageSeo(lang: Language): SeoData {
	return homepageSeo[lang];
}

export function getPortfolioWebsiteSeo(lang: Language): SeoData {
	return portfolioWebsiteSeo[lang];
}

export function getSecurityKnowledgeBaseSeo(lang: Language): SeoData {
	return securityKnowledgeBaseSeo[lang];
}

export function getBeyondTestingSeo(lang: Language): SeoData {
	return beyondTestingSeo[lang];
}

export function getKnowledgeSharingSeo(lang: Language): SeoData {
	return knowledgeSharingSeo[lang];
}