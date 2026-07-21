import githubIcon from "../../../assets/icons/github.svg";

export const portfolioWebsite = {
	header: {
		title: "Portfolio Website",

		summary:
			"A personal portfolio and long-term learning project exploring modern frontend development through quality, accessibility and security.",

		focusAreas: [
			"Astro",
			"HTML",
			"CSS",
			"Accessibility",
			"Security",
		],

		action: {
			label: "View source code",
			href: "https://github.com/MonikaAKrysiak/monikakrysiak.github.io",
			icon: githubIcon,
		},
	},

	overview: {
		title: "Overview",

		paragraphs: [
			"This portfolio is more than a place to showcase my work.",
			"It is a long-term learning project where I explore modern frontend development while applying the same quality, accessibility and security mindset that guides my everyday QA work.",
			"Throughout my career, I usually joined projects that were already in progress. This project gives me the opportunity to make architectural decisions myself and understand how those decisions shape software from its very first commit.",
		],
	},
	figures: {
		homepage: {
			alt: "Homepage of the portfolio website showing the hero section, selected work and contact section",
			caption: "Current version of the portfolio homepage.",
		},
	},
};