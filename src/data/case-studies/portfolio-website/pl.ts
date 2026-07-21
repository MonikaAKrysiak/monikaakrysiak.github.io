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
};