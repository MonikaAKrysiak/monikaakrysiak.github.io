import githubIcon from "../../../assets/icons/github.svg";

export const securityKnowledgeBase = {
	header: {
		title: "Building Security Knowledge",

		summary:
			"Building a practical security knowledge ecosystem that helped QA engineers and other team members understand, apply and share application security knowledge.",

		focusAreas: [
			"Application Security",
			"OWASP ASVS",
			"Security Education",
			"Knowledge Sharing",
			"QA Enablement",
		],
	},

	overview: {
		title: "Overview",

		paragraphs: [
			"Application security knowledge was spread across complex standards, external learning platforms, internal documentation and individual experience. For people who were only beginning to explore security, it was often difficult to know where to start or how to translate that knowledge into everyday testing.",

			"My goal was not simply to create more documentation. I wanted to build a practical knowledge ecosystem that made security easier to understand, learn and apply across different levels of experience.",

			"Over time, the ecosystem grew to include a simplified OWASP ASVS review process, step-by-step testing guides, guided PortSwigger Academy write-ups, onboarding materials, internal quizzes and security guidance for the wider company.",
		],
	},

	knowledgeEcosystem: {
		title: "Building the Knowledge Ecosystem",

		introduction:
			"Rather than creating isolated documents, I focused on building a connected ecosystem where practical guidance, learning resources and reusable templates supported different stages of the security learning journey.",

		areas: [
			{
				title: "Making ASVS Practical",
                summary: "Turning a complex standard into a process useful in everyday QA work.",

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
				title: "Everyday Security Testing",
                summary: "Step-by-step guides supporting practical testing of common security mechanisms.",

				description:
					"Practical testing guides explained how to verify common security mechanisms step by step and highlighted good testing practices for everyday QA work.",

				highlights: [
					"Authentication",
					"Security headers",
					"Forms",
					"File upload",
					"Testing good practices",
				],
			},

			{
				title: "Learning by Doing",
                summary: "Learning through labs, notes and explanations of how the solution was reached.",

				description:
					"A dedicated Confluence space documented selected PortSwigger Academy labs, explaining both the vulnerability and the reasoning behind each solution rather than simply presenting the answer.",

				highlights: [
					"Vulnerability overview",
					"Learning notes",
					"Step-by-step walkthroughs",
					"Lessons learned",
				],
			},

			{
				title: "Security Beyond Development",
                summary: "Practical resources building security awareness across the company.",

				description:
					"Security awareness resources extended beyond software development to help everyone build safer everyday habits.",

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
				"A continuous cycle that improves security knowledge across teams and over time.",

			steps: [
				"Learn",
				"Apply",
				"Share",
				"Grow",
			],
		},
	},
	exampleResources: {
		title: "Example Resources",

		introduction:
			"A few examples of practical resources created to make security knowledge easier to use in everyday work.",

		resources: [
			{
				title: "Simplified ASVS checklist",

				description:
					"A practical checklist with review status, notes and a reusable security report template.",
			},
			{
				title: "PortSwigger lab write-up",

				description:
					"A vulnerability overview with learning notes and a step-by-step solution for selected labs.",
			},
			{
				title: "Internal security quiz",

				description:
					"Example questions used to reinforce security knowledge and encourage regular learning.",
			},
		],
	},
	knowledgeInPractice: {
		title: "Knowledge in Practice",

		introduction:
			"The value of the knowledge base was not measured by the number of documents created. It was measured by how often it helped people make better security decisions in everyday work.",

		items: [
			{
				title: "Daily QA Work",
				description:
					"Security knowledge supported story reviews, test scenario preparation and earlier identification of missing or risky requirements.",
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
			"Building a security knowledge base was never about creating documentation for its own sake. The real challenge was making security knowledge easy to find, understand and apply in everyday work.",

			"I learned that sustainable knowledge sharing depends as much on clear structure, collaboration and continuous improvement as it does on technical expertise.",
		],
	},
};