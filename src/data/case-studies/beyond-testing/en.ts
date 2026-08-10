export const beyondTesting = {
	header: {
		title: "Beyond Testing",

		summary:
			"Quality improves when testers understand products, people and processes-not just requirements.",

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

			"I see quality engineering as the work of connecting people, products and technology. Sometimes that means identifying risks during requirements analysis, simplifying complex processes or challenging assumptions before development begins. The following examples show how this approach influenced both product decisions and team collaboration.",
		],
	},

	impactStories: {
		title: "Impact Beyond Testing",

		items: [
			{
				title: "Finding a security risk before development",

				description:
					"While reviewing the requirements, I noticed that every user would be able to change the company headquarters data, rather than limiting this permission to administrators. This could result in invoices and other important documents being issued with incorrect company details.",

				outcome:
					"The risk was identified before implementation, allowing the access rules to be corrected early.",

				focusAreas: [
					"Security",
					"Requirements Analysis",
					"Prevention",
				],
			},
			{
				title: "Turning hundreds of table pages into a visual solution",

				description:
					"The planned solution would have produced approximately 300 pages of tables. I questioned whether this format would be useful to the client and proposed presenting the most important information visually instead.",

				outcome:
					"After a change in the Business Analyst and Product Owner roles, the idea was reconsidered and implemented as a much clearer visual solution.",

				focusAreas: [
					"Product Thinking",
					"User Needs",
					"Business Analysis",
				],
			},
			{
				title: "Adjusting the release plan for dependent features",

				description:
					"Two separate features were being developed in different repositories. However, both introduced changes to a shared frontend repository that acted as a common integration layer. As development progressed, the changes became intertwined and could no longer be tested or released independently.",

				outcome:
					"Rather than spending additional time trying to separate the changes, I explained the situation to the client, adjusted the testing strategy and coordinated a broader regression. Both features were released together with greater confidence in the overall quality.",

				focusAreas: [
					"Risk Management",
					"Release Planning",
					"Communication",
				],
			},
			{
				title: "Avoiding an unnecessary feature",

				description:
					"Developers proposed a significant improvement that had not been discussed with the client. Before the team invested time in building it, I questioned whether it addressed a genuine user need.",

				outcome:
					"We confirmed that the feature was unnecessary and avoided investing development time in functionality the client would not use.",

				focusAreas: [
					"Critical Thinking",
					"Efficiency",
					"Stakeholder Focus",
				],
			},
			{
				title: "Shaping a client idea into a clear solution",

				description:
					"Clients often begin with a general idea rather than a complete requirement. I ask questions, explore how the functionality could fit into the existing application and propose a possible direction before implementation details are discussed.",

				outcome:
					"This gives the client and the team a shared understanding of the solution before development begins.",

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
			"During a period of frequent changes in the team, I created visual process documentation to help new team members understand complex business workflows more quickly.",
			"Rather than relying only on written descriptions, I combined annotated screenshots, process diagrams and explanations of external system integrations.",
		],

		includesTitle: "What the documentation included",

		includes: [
			"End-to-end process flows",
			"Alternative paths and exceptions",
			"Annotated screenshots",
			"External systems and integration points",
			"Known process bottlenecks",
		],

		focusAreas: [
			"Knowledge Sharing",
			"Visual Documentation",
			"Onboarding",
			"Process Clarity",
		],

		impactTitle: "Impact",

		outcome:
			"The documentation accelerated onboarding, improved communication across the team and continued to provide value as the application and its processes evolved.",
	},
};