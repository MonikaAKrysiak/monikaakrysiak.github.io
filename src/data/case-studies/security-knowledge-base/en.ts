export const securityKnowledgeBase = {
	header: {
		title: "Building a Security Knowledge Ecosystem",

		summary:
			"Building a practical security knowledge ecosystem that helped QA engineers and other team members learn, apply and share application security practices.",

		focusAreas: [
			"Application Security",
			"OWASP ASVS",
			"Security Education",
			"Knowledge Sharing",
			"QA Enablement",
		],
	},

	navigation: {
		overview: "Overview",
		ecosystem: "Ecosystem",
		resources: "Resources",
		inPractice: "In Practice",
		lessons: "Lessons",
	},

	overview: {
		title: "Overview",

		paragraphs: [
			"Application security knowledge was spread across complex standards, external learning platforms, internal documentation and individual experience. For people just beginning to explore security, it was often difficult to know where to start or how to apply what they learned in everyday testing.",

			"My goal was not simply to create more documentation. I wanted to build a practical knowledge ecosystem that made security easier to learn, understand and apply for people with different levels of experience.",

			"Over time, the ecosystem grew to include a simplified OWASP ASVS review process, step-by-step testing guides, detailed PortSwigger Academy lab write-ups, onboarding materials, internal quizzes and security guidance for the wider company.",
		],
	},

	knowledgeEcosystem: {
		centerLabel: "Security Knowledge",
		title: "Building the Knowledge Ecosystem",

		introduction:
			"Rather than creating isolated documents, I focused on connecting practical guidance, learning resources and reusable templates that supported different stages of the security learning journey.",

		areas: [
			{
				icon: "asvs",
				title: "Making ASVS Practical",
				summary:
					"Making a complex standard practical and accessible for QA teams.",

				description:
					"Together with teammates, we transformed OWASP ASVS into a lightweight review process that QA engineers could realistically use during everyday testing.",

				highlights: [
					"Simplified ASVS checklist",
					"Review progress tracking",
					"Reusable security report template",
					"Collaboratively developed with the team",
				],
			},

			{
				icon: "testing",
				title: "Everyday Security Testing",
				summary:
					"Step-by-step guides for testing common security mechanisms.",

				description:
					"The guides explained how to verify common security mechanisms step by step and highlighted useful practices for incorporating security into everyday QA work.",

				highlights: [
					"Authentication",
					"Security headers",
					"Forms",
					"File upload",
					"Security testing practices",
				],
			},

			{
				icon: "learning",
				title: "Learning by Doing",
				summary:
					"Learning through hands-on labs, notes and explanations of the reasoning behind each solution.",

				description:
					"A dedicated Confluence space documented selected PortSwigger Academy labs, covering both the vulnerability and the reasoning behind each solution rather than simply presenting the answer.",

				highlights: [
					"Vulnerability overview",
					"Learning notes",
					"Step-by-step walkthroughs",
					"Lessons learned",
				],
			},

			{
				icon: "awareness",
				title: "Security Beyond Development",
				summary:
					"Practical resources designed to build security awareness across the company.",

				description:
					"The resources extended beyond software development, helping people across the company build safer everyday habits.",

				highlights: [
					"Password management",
					"Secure remote work",
					"Travelling securely",
					"General security awareness",
				],
			},
		],

		cycle: {
			title: "Security Knowledge Lifecycle",

			description:
				"A continuous cycle of learning, applying and sharing knowledge across teams.",

			steps: [
				{
					icon: "learn",
					label: "Learn",
				},
				{
					icon: "apply",
					label: "Apply",
				},
				{
					icon: "share",
					label: "Share",
				},
				{
					icon: "grow",
					label: "Grow",
				},
			],
		},
	},

	exampleResources: {
		title: "Example Resources",

		introduction:
			"A selection of resources created to help teams apply security concepts in their daily work.",

		resources: [
			{
				image: "asvsChecklist",
				title: "Simplified ASVS checklist",

				description:
					"A simplified checklist for tracking review progress, recording notes and preparing reusable security reports.",
			},
			{
				image: "portswiggerLab",
				title: "PortSwigger lab write-up",

				description:
					"Selected lab write-ups combining vulnerability overviews, learning notes and step-by-step walkthroughs.",
			},
			{
				image: "quiz",
				title: "Internal security quiz",

				description:
					"Questions designed to reinforce security knowledge and encourage continuous learning.",
			},
		],
	},

	knowledgeInPractice: {
		title: "Knowledge in Practice",

		introduction:
			"The value of the knowledge base was not measured by the number of documents created, but by how often it helped people make better security decisions in their everyday work.",

		items: [
			{
				title: "Daily QA Work",
				description:
					"The resources supported story reviews, test scenario preparation and earlier identification of missing or risky requirements.",
			},
			{
				title: "Onboarding",
				description:
					"Practical resources gave new team members a clearer starting point and reduced the need to explain the same concepts repeatedly.",
			},
			{
				title: "Knowledge Sharing",
				description:
					"Security Month sessions, quizzes and team discussions helped keep security visible and encouraged continuous learning.",
			},
		],
	},

	whatILearned: {
		title: "What I Learned",

		paragraphs: [
			"Building the knowledge base was never about creating documentation for its own sake. The real challenge was turning complex security concepts into resources that people could easily find, understand and use.",

			"I learned that sustainable knowledge sharing depends as much on clear structure, collaboration and continuous improvement as it does on technical expertise.",
		],
	},
};