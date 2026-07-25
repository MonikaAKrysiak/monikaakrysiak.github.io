export const beyondTesting = {
	header: {
		title: "Beyond Testing",

		summary:
			"Quality improves when testers understand products, people and processes—not only requirements.",

		focusAreas: [
			"Quality Engineering",
			"Business Analysis",
			"Product Thinking",
			"Collaboration",
		],
	},

	overview: {
		title: "My Approach",

		paragraphs: [
			"Throughout my career, I have often worked beyond traditional QA responsibilities. While testing has always been an important part of my role, delivering quality frequently required understanding business goals, analysing requirements and helping teams make better decisions before implementation.",

			"I see quality engineering as connecting people, products and technology. Sometimes that means identifying risks during requirement analysis, sometimes simplifying complex processes or challenging assumptions before development begins. The following examples show how this approach influenced both product decisions and team collaboration.",
		],
	},

	impactStories: {
		title: "My Impact Beyond Testing",

		items: [
			{
				title: "Finding a security risk before development",

				description:
					"While reviewing the requirements, I noticed that every user would be able to change the company headquarters data instead of this permission being restricted to administrators. This could result in invoices and important documents being issued with incorrect company details.",

				outcome:
					"The risk was identified before implementation and the access rules could be corrected early.",

				focusAreas: [
					"Security",
					"Requirements Analysis",
					"Prevention",
				],
			},
			{
				title: "Replacing hundreds of table pages with a clear visualisation",

				description:
					"The planned solution produced approximately 300 pages of tables. I questioned whether this format would be useful to the client and proposed presenting the most important information graphically instead.",

				outcome:
					"After a change of Business Analyst and Product Owner, the idea was reconsidered and implemented as a much clearer visual solution.",

				focusAreas: [
					"Product Thinking",
					"User Needs",
					"Business Analysis",
				],
			},
			{
				title: "Adjusting the release plan when features became dependent",

				description:
					"Two separate features were being developed in different repositories. However, both introduced changes to a shared frontend repository that acted as a common integration layer. As development progressed, the changes became intertwined and could no longer be tested or released independently.",

				outcome:
					"Instead of spending additional time trying to separate the changes, I explained the situation to the client, adjusted the testing strategy and coordinated a wider regression. We released both features together with greater confidence in the overall quality.",

				focusAreas: [
					"Risk Management",
					"Release Planning",
					"Communication",
				],
			},
			{
				title: "Avoiding an unnecessary feature",

				description:
					"Developers proposed a significant improvement that had not been discussed with the client. I questioned whether it reflected a real user need before the team invested time in building it.",

				outcome:
					"We confirmed that the feature was unnecessary and avoided spending development time on functionality the client would not use.",

				focusAreas: [
					"Critical Thinking",
					"Efficiency",
					"Stakeholder Focus",
				],
			},
			{
				title: "Turning a client idea into an agreed solution",

				description:
					"Clients often begin with a general idea rather than a complete requirement. I ask questions, explore how the functionality could fit the existing application and propose a possible direction before implementation details are discussed.",

				outcome:
					"The client and team gain a shared understanding of the solution before development begins.",

				focusAreas: [
					"Business Analysis",
					"Product Thinking",
					"Alignment",
				],
			},
		],
	},

		visualDocumentation: {
			title: "Making Complex Systems Understandable",

			paragraphs: [
				"During a period of frequent team changes, I created visual process documentation to help new team members understand complex business workflows more quickly.",

				"Instead of relying only on written descriptions, I combined annotated screenshots, process diagrams and explanations of external system integrations.",
			],

			includesTitle: "What the documentation included",

			includes: [
				"end-to-end process flows",
				"alternative paths and exceptions",
				"annotated screenshots",
				"external systems and integration points",
				"identified process bottlenecks",
			],

			focusAreas: [
				"Knowledge Sharing",
				"Visual Documentation",
				"Onboarding",
				"Process Clarity",
			],

			impactTitle: "Impact",

			outcome:
				"The documentation accelerated onboarding, improved communication across the team and continued to provide value even as the application and its processes evolved.",
		},
};