export const en = {
	navigation: {
		about: "About",
		work: "Selected Work",
		hobbies: "Hobbies",
		contact: "Contact",
	},

	hero: {
		role: "QA Engineer focused on Application Security.",
		statementFirstLine: "For me, good software isn’t just functional.",
		statementSecondLine: "It should also be secure.",
		viewCv: "View CV (PDF)",
		contact: "Contact",
	},

	about: {
	title: "About me",

	paragraphs: [
		"I've been working in Quality Assurance for over ten years, with a growing focus on application security. For me, security isn't something you add at the end. It's part of building good software from the beginning.",

		"I like understanding how applications work, finding problems and asking questions that help teams solve them before users do. I enjoy working with developers, analysing issues and writing documentation that makes everyday work a little easier.",

		"I believe good software should be functional, reliable and secure. That's the way I try to approach every project.",

		"Outside of work, I enjoy exploring new places, whether it's on a bike, in a kayak or on a hiking trail. I also enjoy board games, DIY projects and spending time with my family.",
	],
},

	contact: {
		title: "Contact",
		introFirstLine: "Have a question, an idea or a project to discuss?",
		introSecondLine: "Feel free to get in touch.",
	},

	selectedWork: {
		readCaseStudy: "Read case study",
	},

	backLink: {
		toSelectedWork: "Back to Selected Work",
	},

	caseStudyNavigation: {
		allWork: "View all selected work",
	},
	
	footer: {
		statement: "Let’s build software that is functional, reliable and secure.",
		builtWith: "Built with:",
		designedWith: "Designed with:",
	},

	hobbies: {
		readMore: "Read more",
	},

	externalLink: {
		opensInNewTab: " — opens in a new tab",
	},

	skipLink: {
		skipToMainContent: "Skip to main content",
	},
	
	accessibility: {
		openMenu: "Open menu",
		closeMenu: "Close menu",

		switchToLightTheme: "Switch to light theme",
		switchToDarkTheme: "Switch to dark theme",

		homepage: "homepage",

		opensInNewTab: "opens in a new tab",

		externalProfile: (service: string) =>
			`${service} profile (opens in a new tab)`,

		externalLink: (label: string) =>
			`${label} (opens in a new tab)`,

		closeDialog: "Close dialog",

		openLargerImage: (alt: string) =>
			`Open larger view: ${alt}`,

		largerImageView: (alt: string) =>
			`Larger view: ${alt}`,

		closeImagePreview: "Close image preview",

		caseStudyNavigation: "Case study navigation",

		previousCaseStudy: (label: string) =>
			`Go to previous case study: ${label}`,

		nextCaseStudy: (label: string) =>
			`Go to next case study: ${label}`,
	},
	backLink: {
		toSelectedWork: "Back to Selected Work",
		toHobbies: "Back to hobbies",
	},
};