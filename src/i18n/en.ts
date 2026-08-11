export const en = {
    navigation: {
        home: "Home",
        about: "About",
        work: "Selected Work",
        hobbies: "Hobbies",
        contact: "Contact",
    },

    hero: {
        role: "QA Engineer focused on Application Security.",
        statementFirstLine: "For me, good software isn't just functional.",
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
		toHobbies: "Back to Hobbies",
	},

	caseStudyNavigation: {
		allWork: "View all selected work",
		focusAreasTitle: "Key Areas",
		documentationFocusAreasTitle: "Focus Areas",
	},

	footer: {
		statement:
			"I build software that is functional, reliable and secure.",
		builtWith: "Built with:",
		designedWith: "Designed with:",
		designPrinciples:
			"Accessibility • Security by Default",
		aiDisclosure: "AI disclosure",
		aiDisclosureText:
			"Generative AI is used as a supporting tool for selected illustrations and for anonymising materials presented in case studies. My experience, projects and work described in this portfolio reflect my actual activities.",
	},

	hobbies: {
		readMore: "Read more",
		readFullStory: "Read the full story",
		hideStory: "Hide story",
		viewAll: "View all hobbies",
		photography: "Photography",
		tabletopGames: "Tabletop Games",
		travel: "Travel",
		selectedPhotographs: "Selected photographs",
		comingSoon: "Coming soon",
		firstAdventureAbroad: "Our first adventure outside Poland.",
		newMemories: "New memories",
		romaniaPhotosPlaceholder:
			"This spot is waiting for photographs from Romania.",
		travelExternalDescription:
			"I share more routes and photographs from our travels on Strava and Instagram.",

		diyAlt: {
			stanczyk:
				"Embroidery based on Jan Matejko's painting Stańczyk",
			pillows:
				"Embroidered pillows with zebra and giraffe motifs for twin girls",
			devil:
				"A yarn devil made as a handmade gift",
			crossStitchMiniatures:
				"Small cross-stitch pieces with chicks and a Christmas star",
			kanzashiStar:
				"White ribbon decoration made using the kanzashi technique",
			woodenSwing:
				"Handmade wooden swing",
			diamondPainting:
				"Two large diamond paintings showing a red panda and an underwater scene",
			gingerbreadHearts:
				"Hand-decorated heart-shaped gingerbread cookies",
			wireWrappedPendant:
				"Green pendant wrapped in copper wire",
			paperFlowers:
				"Hand-folded purple paper flowers",
			decoupageDanseMacabre:
				"Decorated box with a danse macabre motif made using decoupage",
			glassPainting:
				"Colourful character painted on glass",
		},
	},

	externalLink: {
		opensInNewTab: " - opens in a new tab",
	},

	skipLink: {
		skipToMainContent: "Skip to main content",
	},

	accessibility: {
		languageSwitcher: "Language switcher",
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
};