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
					"Every dependency becomes part of the application's attack surface. For that reason, I intentionally keep external libraries to a minimum and evaluate each addition before introducing it into the project.",
					"Whenever possible, assets such as fonts, icons and images are stored locally. Security is treated as a design principle from the very beginning rather than a feature added later.",
				],
			},
			{
				title: "Architecture Before Implementation",
				paragraphs: [
					"Most features in this project begin with an architectural discussion rather than writing code immediately. Before implementing a solution, I try to understand the problem, evaluate different approaches and choose the one that will remain maintainable as the project grows.",

					"This approach has shaped decisions such as the multilingual architecture, reusable components, design tokens, routing strategy and even the order in which new features are implemented. The goal is not to write code quickly, but to build a solid foundation that makes future development easier.",
				],
			},
		],
	},
};