import type { KnowledgeSharingPracticalExample } from "./index";
import { knowledgeSharingEvidence } from "./evidence";

export const knowledgeSharing = {
	header: {
		title: "Knowledge Sharing",

		summary:
			"Helping people understand complex topics by adapting knowledge to different audiences, contexts and learning styles.",

		focusAreas: [
			"Knowledge Sharing",
			"Learning Design",
			"Documentation",
			"Communication",
		],

		action: {
			label: "View my publications on Google Scholar",
			href: "https://scholar.google.com/citations?hl=pl&user=iEJNt0YAAAAJ&view_op=list_works&sortby=pubdate",
		},
	},

	overview: {
		title: "Overview",

		paragraphs: [
			"Throughout my career, I have treated knowledge sharing as an essential part of software quality. Well-written documentation, practical workshops and clear onboarding materials help teams work more effectively, make better decisions and build secure software with greater confidence.",
		],
	},

	audiences: {
		title: "Different Audiences",

		introduction:
			"The same topic may require a completely different approach depending on the audience, their experience and the context in which the knowledge will be used.",

		items: [
			{
				title: "Project teams",

				description:
					"In project work, teams often needed information that supported quick decisions, so I focused on documentation, discussions and examples that made the context easier to understand and apply.",
			},
			{
				title: "New team members",

				description:
					"During team changes, I created onboarding materials that helped new people understand systems, processes and exceptions without relying on the knowledge of a single team member.",
			},
			{
				title: "Students",

				description:
					"Because students had limited project experience, I translated technical and security topics into structured explanations, practical exercises and examples based on real situations.",
			},
			{
				title: "Professional community",

				description:
					"Conference and community audiences often included people with different levels of experience, so I used practical examples that could be adapted to their everyday work.",
			},
		],
	},

	practicalExamples: {
		title: "Making Complex Things Understandable",

		introduction:
			"Knowledge sharing is most valuable when it helps people solve real problems. These examples show how I translated complex topics into practical resources for different audiences.",

		items: [
			{
				title: "SQL and JQL for QA",

				context:
					"As part of a broader training programme for future QA engineers, I was responsible for designing the SQL and JQL module, focusing on skills testers use in their daily work.",

				approach:
					"Instead of teaching databases and query languages in isolation, I selected the concepts, queries and exercises that testers are most likely to use while investigating defects, preparing test data and verifying application behaviour.",

				outcome:
					"The module connected theory with realistic testing scenarios, helping participants understand not only how to write queries, but also when and why to use them.",

				meta: [
					{
						label: "Format",
						value: "Part of a broader QA training programme",
					},
					{
						label: "Audience",
						value: "Future QA engineers",
					},
					{
						label: "Topics",
						value: "SQL, JQL and databases",
					},
				],
			},
			{
				title: "Workshop materials",

				context:
					"Technical workshops needed to support participants with different levels of experience while remaining practical and engaging.",

				approach:
					"I prepared slide decks, exercises, checklists and supporting examples that guided participants through the topic and encouraged active discussion rather than passive listening.",

				outcome:
					"The materials gave participants a clear learning structure and resources they could return to after the session.",

				meta: [
					{
						label: "Format",
						value: "Workshops and internal sessions",
					},
					{
						label: "Audience",
						value: "Participants with mixed experience levels",
					},
					{
						label: "Materials",
						value: "Slides, exercises and checklists",
					},
				],
			},
			{
				title: "Technical articles",

				context:
					"Security and quality topics are often described in a way that feels abstract or difficult to connect with everyday engineering work.",

				approach:
					"I wrote articles that translated complex concepts into accessible guidance, using examples grounded in real QA and security scenarios.",

				outcome:
					"The articles made these topics easier to explore independently and provided reusable reference material for people working in software quality.",

				meta: [
					{
						label: "Format",
						value: "Technical articles",
					},
					{
						label: "Audience",
						value: "QA and software professionals",
					},
					{
						label: "Focus",
						value: "Security and quality in practice",
					},
				],
			},
			{
				title: "Academic teaching",

				context:
					"I worked with students through regular Project Management classes and a guest lecture focused on practical topics from software quality and application security.",

				approach:
					"During the classes, I helped students translate project management theory into decisions, problems and situations they might encounter in team-based work. The guest lecture was built around examples from QA and application security.",

				outcome:
					"Both formats helped students connect academic knowledge with the realities of software projects and understand how different roles collaborate when building software.",

				meta: [
					{
						label: "Format",
						value: "Regular classes and a guest lecture",
					},
					{
						label: "Audience",
						value: "Students of Computer Science and Computer Science & Econometrics",
					},
					{
						label: "Topics",
						value: "Project management, QA and application security",
					},
				],
			},
			{
				title: "Community talks",

				context:
					"Security and quality communities bring together people with very different levels of experience, roles and expectations.",

				approach:
					"I prepared practical talks for events and communities such as OWASP Poland Day, OWASP Kraków and Uszanowanko Programowanko, adapting the examples and level of detail to each audience.",

				outcome:
					"The talks helped participants connect security concepts with everyday QA and engineering work and created space for questions and further discussion.",

				meta: [
					{
						label: "Format",
						value: "Conference and community talks",
					},
					{
						label: "Audience",
						value: "Security, QA and software enthusiasts",
					},
					{
						label: "Examples",
						value:
							"OWASP Poland Day, OWASP Kraków and Uszanowanko Programowanko",
					},
				],
				evidence: [
					{
						title: "OWASP Poland Day 2023",
						description:
							"A talk titled “Smuggling Security Into a Software Project. A Guide for Cunning QAs” presented at OWASP Poland Day 2023 in Zabrze.",
						image: knowledgeSharingEvidence.owaspPolandDay2023.eventImage,
						alt: "OWASP Poland Day 2023 graphic announcing Monika Krysiak’s talk “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImage:
							knowledgeSharingEvidence.owaspPolandDay2023.speakerImage,
						secondaryImageAlt:
							"OWASP Poland Day 2023 speaker graphic featuring Monika Krysiak and the talk “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						links: [
							{
								label: "Event page",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.eventbrite,
							},
							{
								label: "OWASP Poland announcement",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.facebook,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.linkedin,
							},
						],
					},
					{
						title: "Uszanowanko Programowanko",
						description:
							"A community talk about bringing application security into the everyday work of QA engineers.",
						image: knowledgeSharingEvidence.uszanowanko.eventImage,
						alt: "Uszanowanko Programowanko event graphic about cloud, accessibility and security.",
						videoSrc: knowledgeSharingEvidence.uszanowanko.videoSrc,
						links: [
							{
								label: "Talk page",
								href: knowledgeSharingEvidence.uszanowanko.links.eventPage,
							},
							{
								label: "Presentation",
								href: knowledgeSharingEvidence.uszanowanko.links.slides,
							},
							{
								label: "Event on Meetup",
								href: knowledgeSharingEvidence.uszanowanko.links.meetup,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.uszanowanko.links.linkedin,
							},
						],
					},
					{
						title: "OWASP Kraków Chapter",
						description: "A talk titled “Smuggling Security Into a Software Project. A Guide for Cunning QAs” presented at an OWASP Kraków Chapter meeting.",
						image: knowledgeSharingEvidence.owaspKrakow.eventImage,
						alt: "OWASP Kraków event graphic focused on security in the software development lifecycle.",
						secondaryImage: knowledgeSharingEvidence.owaspKrakow.presentationImage,
						secondaryImageAlt: "Title slide of the presentation “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImageLarge: true,
						links: [
							{
								label: "Event on Meetup",
								href: knowledgeSharingEvidence.owaspKrakow.links.meetup,
							},
							{
								label: "Event announcement",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinAnnouncement,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinRecap,
							},
						],
					},
				],
			},
		] satisfies KnowledgeSharingPracticalExample[],
	},

	impact: {
		title: "Knowledge in Practice",

		introduction:
			"Knowledge sharing created value beyond individual sessions or materials. It supported everyday work, helped people become more independent and encouraged better technical conversations.",

		items: [
			{
				title: "Faster onboarding",

				description:
					"Clear materials and practical examples helped new team members understand systems, processes and project context more quickly.",
			},
			{
				title: "Greater independence",

				description:
					"People could return to structured resources when solving problems instead of relying solely on knowledge held by individual team members.",
			},
			{
				title: "Better questions",

				description:
					"Workshops, discussions and practical examples encouraged people to explore the reasons behind decisions rather than only follow instructions.",
			},
			{
				title: "Wider security awareness",

				description:
					"Security topics became part of everyday QA and engineering conversations instead of remaining limited to specialist activities.",
			},
			{
				title: "Reusable knowledge",

				description:
					"Articles, presentations, exercises and documentation continued to support learning after the original session or project had ended.",
			},
		],
	},

	reflection: {
		title: "What I Learned",

		paragraphs: [
			"Teaching, documentation and public speaking reinforced the same lesson: knowledge has value only when people can apply it in practice.",

			"Over time, I realised that good technical communication is not about demonstrating expertise. It is about understanding the audience, removing unnecessary complexity and helping people make better decisions.",

			"That mindset continues to shape how I work today - whether I am reviewing requirements, discussing security risks, writing documentation or collaborating with a development team.",
		],
	},
};