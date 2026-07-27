import githubIcon from "../../../assets/icons/github.svg";

export const portfolioWebsite = {
	header: {
		title: "Portfolio Website",

		summary:
			"A personal portfolio and long-term learning project exploring modern frontend development with a focus on quality, accessibility and security.",

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
			"Throughout my career, I have often joined projects that were already in progress. This project gives me the opportunity to make architectural decisions myself and understand how they shape software from its very first commit.",
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
			"This portfolio is built around the same engineering principles I would like to see in commercial software projects. It reflects the way I approach software architecture, security, accessibility and long-term maintainability.",

		items: [
			{
				title: "Security by Default",

				paragraphs: [
					"Security is treated as a design principle from the beginning. This includes limiting external dependencies and keeping fonts, icons and images under local control.",
				],
			},
			{
				title: "Architecture Before Implementation",

				paragraphs: [
					"Before writing code, I try to understand the problem, evaluate possible approaches and choose a structure that will remain clear and maintainable as the project grows.",
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
					"Documentation is created alongside the code so that architectural decisions, development sessions and the reasoning behind important changes remain understandable over time.",
				],
			},
		],
	},
	designDecisions: {
		title: "Design Decisions",

		introduction:
			"The following examples show how the engineering principles presented above were applied throughout this project.",

		evidenceTitle: "Evidence",

		items: [
			{
				id: "security-by-default",

				title: "Security by Default",

				paragraphs: [
					"This project intentionally minimises unnecessary external dependencies and keeps the assets used by the website under local control.",
					"Security-related choices are made during design and implementation rather than treated as a separate review at the end.",
				],

				implementedItems: [
					"Local fonts instead of external CDNs",
					"Local SVG icons",
					"Minimal third-party dependencies",
					"Dependencies reviewed before installation",
				],

				evidence: [
					{
						alt: "Excerpt of package.json showing the Astro dependency and explicitly allowed esbuild install script.",
						caption: "package.json",
					},
					{
						alt: "Project assets directory showing locally stored Manrope fonts and SVG icons.",
						caption: "Project assets stored locally",
					},
				],
			},
			{
				id: "architecture-before-implementation",

				title: "Architecture Before Implementation",

				paragraphs: [
					"Before implementing features, I designed the overall structure of the application. The project evolved through reusable components, data-driven content and small iterative refactorings instead of one-off solutions.",
					"This approach made it possible to introduce new sections, multilingual support and reusable layouts without rewriting existing code.",
				],

				implementedItems: [
					"Reusable Astro components.",
					"Data-driven content.",
					"URL-based language routing",
					"Small architectural iterations.",
				],

				evidence: [
					{
						alt: "Source directory showing the main architectural areas of the portfolio project.",
						caption: "Project source structure",
					},
					{
						alt: "Components directory showing reusable Astro components used throughout the portfolio.",
						caption: "Reusable Astro components",
					},
				],
			},
			{
				id: "accessibility-by-design",

				title: "Accessibility by Design",

				paragraphs: [
					"Accessibility is considered while designing components, navigation and content rather than added after implementation.",

					"Semantic HTML provides the foundation, while ARIA is used only where native elements do not provide enough context.",
				],

				implementedItems: [
					"Semantic HTML structure.",
					"Keyboard-accessible navigation.",
					"Visible focus states.",
					"Descriptive alternative text.",
				],
				evidence: [
					{
						alt: "Semantic HTML structure used in an Astro component.",
						caption: "Semantic document structure",
					},
					{
					alt: "Header component showing language and theme controls together with an accessible mobile menu button.",
					caption: "Accessible navigation controls",
				},
				],
			},
			{
				id: "documentation-as-part-of-engineering",

				title: "Documentation as Part of Engineering",

				paragraphs: [
					"Documentation is treated as part of the implementation process rather than as a separate task completed at the end.",

				"Architectural decisions, development sessions and project principles are documented so that the reasoning behind the code remains visible over time.",
				],

				implementedItems: [
					"Architecture Decision Records.",
					"Development session logs.",
					"Project overview and engineering principles.",
					"Documented commit scope and implementation context.",
				],

				evidence: [
					{
						alt: "Architecture Decision Record describing a technical decision in the portfolio project.",
						caption: "Architecture Decision Record",
					},
					{
						alt: "Development session log documenting the goal, implementation details and design decisions.",
						caption: "Development session log",
					},
				],
			},
		],
	},
};