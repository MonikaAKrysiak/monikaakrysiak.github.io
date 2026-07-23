import githubIcon from "../../../assets/icons/github.svg";

export const portfolioWebsite = {
	header: {
		title: "Strona portfolio",

		summary:
			"Osobiste portfolio i długoterminowy projekt edukacyjny, w którym poznaję nowoczesny frontend, dbając jednocześnie o jakość, dostępność i bezpieczeństwo.",

		focusAreas: [
			"Astro",
			"HTML",
			"CSS",
			"Dostępność",
			"Bezpieczeństwo",
		],

		action: {
			label: "Zobacz kod źródłowy",
			href: "https://github.com/MonikaAKrysiak/monikakrysiak.github.io",
			icon: githubIcon,
		},
	},

	overview: {
		title: "Opis projektu",

		paragraphs: [
			"To portfolio jest czymś więcej niż miejscem do prezentowania mojej pracy.",
			"To długoterminowy projekt edukacyjny, w którym poznaję nowoczesny frontend, wykorzystując przy tym takie samo podejście do jakości, dostępności i bezpieczeństwa, jakie stosuję na co dzień w pracy QA.",
			"W swojej karierze zazwyczaj dołączałam do projektów, które już trwały. Ten projekt daje mi możliwość samodzielnego podejmowania decyzji architektonicznych i obserwowania, jak wpływają one na oprogramowanie od jego pierwszego commita.",
		],
	},

	figures: {
		homepage: {
			alt: "Strona główna portfolio prezentująca sekcję Hero, wybrane projekty i sekcję kontaktową.",
			caption: "Aktualna wersja strony głównej portfolio.",
		},
	},

	engineeringPrinciples: {
		title: "Jak tworzę oprogramowanie",

		introduction:
			"To portfolio powstaje zgodnie z tymi samymi zasadami, które chciałabym widzieć w projektach komercyjnych. Pokazuje moje podejście do architektury oprogramowania, bezpieczeństwa, dostępności i długoterminowego utrzymania aplikacji.",

		items: [
			{
				title: "Security by Default",

				paragraphs: [
					"Bezpieczeństwo traktuję jako zasadę projektową od samego początku. Ograniczam zewnętrzne zależności, a tam, gdzie to możliwe, fonty, ikony i obrazy przechowuję lokalnie.",
				],
			},
			{
				title: "Architecture Before Implementation",

				paragraphs: [
					"Przed rozpoczęciem implementacji staram się zrozumieć problem, przeanalizować możliwe podejścia i wybrać strukturę, która pozostanie czytelna i łatwa w utrzymaniu wraz z rozwojem projektu.",
				],
			},
			{
				title: "Accessibility by Design",

				paragraphs: [
					"Dostępność uwzględniam już podczas projektowania komponentów, nawigacji i treści. Fundamentem jest semantyczny HTML, a ARIA stosuję wyłącznie tam, gdzie natywne elementy nie wystarczają.",
				],
			},
			{
				title: "Documentation as Part of Development",

				paragraphs: [
					"Dokumentacja powstaje równolegle z kodem, dzięki czemu decyzje architektoniczne, przebieg kolejnych sesji i uzasadnienie ważnych zmian pozostają czytelne również po dłuższym czasie.",
				],
			},
		],
	},

	designDecisions: {
		title: "Decyzje projektowe",

		introduction:
			"Poniższe przykłady pokazują, jak opisane wcześniej zasady inżynierskie zostały zastosowane w tym projekcie.",

		items: [
			{
				title: "Bezpieczeństwo od początku",

				paragraphs: [
					"Projekt celowo ogranicza zbędne zależności zewnętrzne i zachowuje kontrolę nad zasobami używanymi przez stronę.",

					"Decyzje związane z bezpieczeństwem są podejmowane już na etapie projektowania i implementacji, a nie dopiero podczas końcowego przeglądu.",
				],

				evidence: [
					"Lokalne fonty zamiast zewnętrznych CDN-ów.",
					"Lokalne ikony SVG.",
					"Minimalna liczba zależności zewnętrznych.",
					"Weryfikacja zależności przed instalacją.",
				],
			},
		],
	},
};