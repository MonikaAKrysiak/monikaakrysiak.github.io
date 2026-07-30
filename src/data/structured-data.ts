import type { Language } from "../i18n";

const site = {
	name: "Monika Krysiak",
	url: "https://monikaakrysiak.github.io",
};

export const getWebsiteStructuredData = (lang: Language) => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${site.url}/#website`,
	name: site.name,
	url: site.url,
	description:
		lang === "pl"
			? "Portfolio Moniki Krysiak, QA Engineer specjalizującej się w bezpieczeństwie aplikacji."
			: "Portfolio of Monika Krysiak, QA Engineer focused on Application Security.",
	inLanguage: lang === "pl" ? "pl-PL" : "en-US",
});

export const getPersonStructuredData = () => ({
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": `${site.url}/#person`,
	name: "Monika Krysiak",
	url: site.url,
	image: `${site.url}/og-image.png`,
	jobTitle: "QA Engineer focused on Application Security",
	sameAs: [
		"https://github.com/MonikaAKrysiak",
	],
	knowsAbout: [
		"Quality Assurance",
		"Application Security",
		"Accessibility",
		"Software Testing",
		"Quality Engineering",
	],
});

export const getWebPageStructuredData = (
	lang: Language,
	title: string,
	description: string,
	url: string,
) => ({
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": `${url}#webpage`,
	url,
	name: title,
	description,
	inLanguage: lang === "pl" ? "pl-PL" : "en-US",
	isPartOf: {
		"@id": `${site.url}/#website`,
	},
	about: {
		"@id": `${site.url}/#person`,
	},
});

export interface ArticleStructuredData {
	type: "TechArticle";
	keywords: string[];
}

export const getStructuredData = (
	lang: Language,
	title: string,
	description: string,
	url: string,
	articleStructuredData?: ArticleStructuredData,
) => ({
	"@context": "https://schema.org",
	"@graph": [
		{
			...getWebsiteStructuredData(lang),
			"@context": undefined,
			author: {
				"@id": `${site.url}/#person`,
			},
			publisher: {
				"@id": `${site.url}/#person`,
			},
		},
		{
			...getPersonStructuredData(),
			"@context": undefined,
		},
		{
			...getWebPageStructuredData(
				lang,
				title,
				description,
				url,
			),
			"@context": undefined,
		},
			...(articleStructuredData
				? [
						{
							"@type": articleStructuredData.type,
							"@id": `${url}#article`,
							headline: title,
							description,
							url,
							inLanguage: lang === "pl" ? "pl-PL" : "en-US",
							keywords: articleStructuredData.keywords,
							about: articleStructuredData.keywords,
							image: `${site.url}/og-image.png`,	
							author: {
								"@id": `${site.url}/#person`,
							},
							publisher: {
								"@id": `${site.url}/#person`,
							},
							mainEntityOfPage: {
								"@id": `${url}#webpage`,
							},
							isPartOf: {
								"@id": `${site.url}/#website`,
							},
						},
					]
				: []),
	],
});