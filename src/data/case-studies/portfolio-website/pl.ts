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
					"Każda zależność staje się częścią powierzchni ataku aplikacji. Dlatego świadomie ograniczam liczbę zewnętrznych bibliotek i analizuję każdą z nich przed dodaniem do projektu.",

					"Tam, gdzie jest to możliwe, zasoby takie jak fonty, ikony czy obrazy są przechowywane lokalnie. Bezpieczeństwo jest traktowane jako zasada projektowa od samego początku, a nie funkcja dodawana na końcu projektu.",
				],
			},
			{
				title: "Architecture Before Implementation",
				paragraphs: [
					"Większość zmian w tym projekcie zaczyna się od rozmowy o architekturze, a nie od pisania kodu. Zanim powstanie rozwiązanie, staram się zrozumieć problem, przeanalizować możliwe podejścia i wybrać takie, które pozostanie łatwe w utrzymaniu wraz z rozwojem projektu.",

					"Takie podejście wpłynęło między innymi na architekturę wielojęzyczności, projektowanie komponentów wielokrotnego użytku, wykorzystanie design tokens, sposób organizacji routingu, a nawet kolejność implementacji nowych funkcjonalności. Celem nie jest napisanie kodu jak najszybciej, lecz zbudowanie solidnych fundamentów ułatwiających dalszy rozwój projektu.",
				],
			},
		],
	},
};