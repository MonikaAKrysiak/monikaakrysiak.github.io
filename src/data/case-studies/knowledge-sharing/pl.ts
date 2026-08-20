import type { KnowledgeSharingPracticalExample } from "./index";
import { knowledgeSharingEvidence } from "./evidence";

export const knowledgeSharing = {
	header: {
		title: "Dzielenie się wiedzą",

		summary:
			"Pomagam innym zrozumieć złożone zagadnienia, dopasowując sposób przekazywania wiedzy do różnych odbiorców, kontekstów i sposobów uczenia się.",

		focusAreas: [
			"Dzielenie się wiedzą",
			"Projektowanie materiałów edukacyjnych",
			"Dokumentacja",
			"Komunikacja",
		],

		action: {
			label: "Zobacz moje publikacje w Google Scholar",
			href: "https://scholar.google.com/citations?hl=pl&user=iEJNt0YAAAAJ&view_op=list_works&sortby=pubdate",
		},
	},

	overview: {
		title: "Przegląd",

		paragraphs: [
			"W swojej karierze zawsze traktowałam dzielenie się wiedzą jako ważny element budowania jakości oprogramowania. Dobra dokumentacja, praktyczne warsztaty i przemyślane materiały onboardingowe pomagają zespołom pracować skuteczniej, podejmować lepsze decyzje i z większą pewnością tworzyć bezpieczne aplikacje.",
		],
	},

	audiences: {
		title: "Różni odbiorcy",

		introduction:
			"Ten sam temat może wymagać zupełnie innego podejścia w zależności od odbiorców, ich doświadczenia oraz kontekstu, w którym będą wykorzystywać wiedzę.",

		items: [
			{
				title: "Zespoły projektowe",

				description:
					"W projektach najważniejsze było szybkie podejmowanie decyzji, dlatego przygotowywałam dokumentację, prowadziłam dyskusje i tworzyłam materiały ułatwiające zrozumienie kontekstu.",
			},
			{
				title: "Nowe osoby w zespole",

				description:
					"Podczas zmian w zespole tworzyłam materiały onboardingowe, które pomagały zrozumieć systemy, procesy i wyjątki bez konieczności polegania na wiedzy jednej osoby.",
			},
			{
				title: "Studenci",

				description:
					"Pracując ze studentami, tłumaczyłam zagadnienia techniczne, bezpieczeństwo i zarządzanie projektami za pomocą praktycznych ćwiczeń oraz przykładów z rzeczywistych projektów.",
			},
			{
				title: "Społeczność branżowa",

				description:
					"Podczas konferencji i spotkań społeczności dostosowywałam przekaz do poziomu doświadczenia uczestników, opierając go na praktycznych przykładach przydatnych w codziennej pracy.",
			},
		],
	},

	practicalExamples: {
		title: "Upraszczanie złożonych tematów",

		introduction:
			"Dzielenie się wiedzą ma największą wartość wtedy, gdy pomaga rozwiązywać rzeczywiste problemy. Te przykłady pokazują różne sposoby, w jakie przekładałam złożone zagadnienia na praktyczne materiały.",

		items: [
			{
				title: "SQL i JQL dla QA",

				context:
					"W ramach większego programu szkoleniowego dla osób rozpoczynających pracę w QA odpowiadałam za przygotowanie modułu dotyczącego SQL i JQL, skupionego na praktycznych umiejętnościach wykorzystywanych w codziennej pracy testera.",

				approach:
					"Zamiast omawiać bazy danych i języki zapytań w oderwaniu od praktyki, wybrałam zagadnienia, zapytania i ćwiczenia przydatne podczas analizy błędów, przygotowywania danych testowych oraz weryfikacji działania aplikacji.",

				outcome:
					"Moduł łączył teorię z realistycznymi scenariuszami testowymi, pomagając uczestnikom zrozumieć nie tylko, jak tworzyć zapytania, ale również kiedy i dlaczego warto z nich korzystać.",

				meta: [
					{
						label: "Forma",
						value: "Część większego programu szkoleniowego",
					},
					{
						label: "Odbiorcy",
						value: "Osoby rozpoczynające pracę w QA",
					},
					{
						label: "Tematy",
						value: "SQL, JQL i bazy danych",
					},
				],
			},
			{
				title: "Materiały warsztatowe",

				context:
					"Warsztaty techniczne musiały wspierać osoby o różnym poziomie doświadczenia, a jednocześnie pozostać praktyczne i angażujące.",

				approach:
					"Przygotowywałam prezentacje, ćwiczenia, checklisty i przykłady, które prowadziły uczestników przez temat oraz zachęcały do aktywnej dyskusji zamiast biernego słuchania.",

				outcome:
					"Materiały porządkowały proces nauki i pozostawały użytecznym źródłem, do którego uczestnicy mogli wracać po zakończeniu spotkania.",

				meta: [
					{
						label: "Forma",
						value: "Warsztaty i sesje wewnętrzne",
					},
					{
						label: "Odbiorcy",
						value: "Osoby o różnym poziomie doświadczenia",
					},
					{
						label: "Materiały",
						value: "Prezentacje, ćwiczenia i checklisty",
					},
				],
			},
			{
				title: "Artykuły techniczne",

				context:
					"Zagadnienia związane z bezpieczeństwem i jakością są często opisywane w sposób abstrakcyjny lub trudny do połączenia z codzienną pracą inżynierską.",

				approach:
					"Pisałam artykuły, które przekładały złożone pojęcia na praktyczne wskazówki, wykorzystując jasne wyjaśnienia oraz przykłady osadzone w rzeczywistych sytuacjach z obszaru QA i bezpieczeństwa.",

				outcome:
					"Artykuły ułatwiały samodzielne poznawanie tematów i stanowiły materiały referencyjne, do których można było później wracać.",

				meta: [
					{
						label: "Forma",
						value: "Artykuły techniczne",
					},
					{
						label: "Odbiorcy",
						value: "Specjaliści QA i osoby z branży IT",
					},
					{
						label: "Tematy",
						value: "Bezpieczeństwo i jakość w praktyce",
					},
				],
			},
			{
				title: "Zajęcia akademickie",

				context:
					"Pracowałam ze studentami zarówno podczas regularnych ćwiczeń z zarządzania projektami, jak i w ramach gościnnego wystąpienia poświęconego praktycznym zagadnieniom z obszaru jakości i bezpieczeństwa.",

				approach:
					"Podczas ćwiczeń pomagałam studentom przekładać teorię zarządzania projektami na decyzje, problemy i sytuacje spotykane w pracy zespołowej. Wystąpienie gościnne opierałam natomiast na praktycznych przykładach z pracy w QA i bezpieczeństwie aplikacji.",

				outcome:
					"Obie formy pozwalały studentom lepiej połączyć wiedzę akademicką z realiami pracy przy projektach informatycznych i zobaczyć, jak różne role współpracują przy tworzeniu oprogramowania.",

				meta: [
					{
						label: "Forma",
						value: "Regularne ćwiczenia i wystąpienie gościnne",
					},
					{
						label: "Odbiorcy",
						value: "Studenci kierunków Informatyka i Ekonometria oraz Informatyka",
					},
					{
						label: "Tematy",
						value:
							"Zarządzanie projektami, QA i bezpieczeństwo aplikacji",
					},
				],
			},
			{
				title: "Wystąpienia dla społeczności",

				context:
					"Społeczności związane z bezpieczeństwem i wytwarzaniem oprogramowania skupiają osoby o różnym doświadczeniu, rolach i oczekiwaniach.",

				approach:
					"Przygotowywałam praktyczne wystąpienia dla wydarzeń i społeczności takich jak OWASP Poland Day, OWASP Kraków czy Uszanowanko Programowanko, dopasowując przykłady i poziom szczegółowości do odbiorców.",

				outcome:
					"Wystąpienia pomagały uczestnikom łączyć zagadnienia bezpieczeństwa z codzienną pracą w QA i tworzeniu oprogramowania, a także tworzyły przestrzeń do pytań i dalszej dyskusji.",

				meta: [
					{
						label: "Forma",
						value: "Wystąpienia konferencyjne i społecznościowe",
					},
					{
						label: "Odbiorcy",
						value:
							"Osoby zainteresowane bezpieczeństwem, QA i tworzeniem oprogramowania",
					},
					{
						label: "Przykłady",
						value:
							"OWASP Poland Day, OWASP Kraków i Uszanowanko Programowanko",
					},
				],

				evidence: [
					{
						title: "OWASP Poland Day 2023",
						description:
							"Wystąpienie „Smuggling Security Into a Software Project. A Guide for Cunning QAs” podczas OWASP Poland Day 2023 w Zabrzu.",
						image: knowledgeSharingEvidence.owaspPolandDay2023.eventImage,
						alt: "Grafika OWASP Poland Day 2023 zapowiadająca wystąpienie Moniki Krysiak „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImage:
							knowledgeSharingEvidence.owaspPolandDay2023.speakerImage,
						secondaryImageAlt:
							"Grafika OWASP Poland Day 2023 przedstawiająca Monikę Krysiak jako prelegentkę wystąpienia „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						links: [
							{
								label: "Strona wydarzenia",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.eventbrite,
							},
							{
								label: "Zapowiedź OWASP Poland",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.facebook,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.linkedin,
							},
						],
					},
					{
						title: "Uszanowanko Programowanko",
						description:
							"Wystąpienie o bezpieczeństwie aplikacji w codziennej pracy QA, przygotowane dla społeczności Uszanowanko Programowanko.",
						image: knowledgeSharingEvidence.uszanowanko.eventImage,
						alt: "Grafika wydarzenia Uszanowanko Programowanko z hasłem o chmurach, dostępności i bezpieczeństwie.",
						videoSrc: knowledgeSharingEvidence.uszanowanko.videoSrc,
						links: [
							{
								label: "Strona wystąpienia",
								href: knowledgeSharingEvidence.uszanowanko.links.eventPage,
							},
							{
								label: "Prezentacja",
								href: knowledgeSharingEvidence.uszanowanko.links.slides,
							},
							{
								label: "Wydarzenie na Meetup",
								href: knowledgeSharingEvidence.uszanowanko.links.meetup,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.uszanowanko.links.linkedin,
							},
						],
					},
					{
						title: "OWASP Kraków Chapter",
						description: "Wystąpienie „Smuggling Security Into a Software Project. A Guide for Cunning QAs” podczas spotkania OWASP Kraków Chapter.",
						image: knowledgeSharingEvidence.owaspKrakow.eventImage,
						alt: "Grafika wydarzenia OWASP Kraków poświęconego bezpieczeństwu w cyklu wytwarzania oprogramowania.",
						secondaryImage: knowledgeSharingEvidence.owaspKrakow.presentationImage,
						secondaryImageAlt: "Slajd tytułowy prezentacji „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImageLarge: true,
						links: [
							{
								label: "Wydarzenie na Meetup",
								href: knowledgeSharingEvidence.owaspKrakow.links.meetup,
							},
							{
								label: "Zapowiedź wydarzenia",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinAnnouncement,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinRecap,
							},
						],
					},
				],
			},
		] satisfies KnowledgeSharingPracticalExample[],
	},

	impact: {
		title: "Materiały, do których można wracać",

		introduction:
			"Dzielenie się wiedzą przynosiło wartość również po zakończeniu spotkań i szkoleń. Wspierało codzienną pracę, zwiększało samodzielność i pomagało prowadzić lepsze rozmowy techniczne.",

		items: [
			{
				title: "Szybszy onboarding",

				description:
					"Przejrzyste materiały i praktyczne przykłady pomagały nowym osobom szybciej zrozumieć systemy, procesy oraz kontekst projektu.",
			},
			{
				title: "Większa samodzielność",

				description:
					"Uporządkowane materiały pozwalały samodzielnie wracać do potrzebnych informacji zamiast polegać wyłącznie na wiedzy pojedynczych osób w zespole.",
			},
			{
				title: "Lepsze pytania",

				description:
					"Warsztaty, dyskusje i praktyczne przykłady zachęcały do szukania powodów stojących za decyzjami zamiast jedynie wykonywania instrukcji.",
			},
			{
				title: "Szersza świadomość bezpieczeństwa",

				description:
					"Zagadnienia bezpieczeństwa stawały się częścią codziennych rozmów w QA i zespołach inżynierskich, a nie tematem podejmowanym wyłącznie przez specjalistów.",
			},
			{
				title: "Wiedza wielokrotnego użytku",

				description:
					"Artykuły, prezentacje, ćwiczenia i dokumentacja wspierały dalszą naukę również po zakończeniu konkretnego spotkania lub projektu.",
			},
		],
	},

	reflection: {
		title: "Czego się nauczyłam",

		paragraphs: [
			"Prowadzenie szkoleń, tworzenie dokumentacji i występowanie na konferencjach utwierdziły mnie w przekonaniu, że wiedza ma wartość tylko wtedy, gdy można ją wykorzystać w praktyce.",

			"Z czasem zrozumiałam, że dobra komunikacja techniczna nie polega na pokazywaniu swojej wiedzy. Jej celem jest zrozumienie odbiorców, usuwanie niepotrzebnej złożoności i pomaganie innym w podejmowaniu lepszych decyzji.",

			"To podejście wykorzystuję również w codziennej pracy - podczas analizy wymagań, rozmów o bezpieczeństwie, tworzenia dokumentacji i współpracy z zespołami projektowymi.",
		],
	},
};
