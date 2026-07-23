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

	engineeringPrinciples: {
		title: "How I Build Software",

		introduction:
			"This portfolio is built using the same engineering principles I would like to see in commercial software projects. It reflects the way I approach software architecture, security, accessibility and long-term maintainability.",

		items: [
			{
				title: "Security by Default",

				paragraphs: [
					"Security is treated as a design principle from the beginning, from limiting external dependencies to keeping fonts, icons and images under local control.",
				],
			},
			{
				title: "Architecture Before Implementation",

				paragraphs: [
					"Before writing code, I first try to understand the problem, evaluate possible approaches and choose a structure that will remain clear and maintainable as the project grows.",
				],
			},
			{
				title: "Accessibility by Design",

				paragraphs: [
					"Accessibility is considered while designing components, navigation and content, with semantic HTML as the foundation and ARIA used only when native elements are not sufficient.",
				],
			},
			{
				title: "Documentation as Part of Development",

				paragraphs: [
					"Documentation is created alongside the code so that architectural decisions, development sessions and the reasons behind important changes remain understandable over time.",
				],
			},
		],
	},
	designDecisions: {
		title: "Design Decisions",

		introduction:
			"The following examples show how the engineering principles presented above were applied throughout this project.",

		items: [
			{
				title: "Security by Default",

				paragraphs: [
					"This project intentionally minimizes unnecessary external dependencies and keeps control over the assets used by the website.",

					"Security-related choices are made during design and implementation rather than treated as a separate review at the end.",
				],

				evidence: [
					"Local fonts instead of external CDNs.",
					"Local SVG icons.",
					"Minimal third-party dependencies.",
					"Dependencies reviewed before installation.",
				],
			},
		],
	},
};