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
			"W swojej karierze zazwyczaj dołączałam do projektów, które już trwały. Ten projekt daje mi możliwość samodzielnego podejmowania decyzji architektonicznych i obserwowania, jak wpływają one na oprogramowanie od pierwszego commita.",
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
				title: "Bezpieczeństwo od początku",

				paragraphs: [
					"Bezpieczeństwo traktuję jako zasadę projektową od samego początku. Ograniczam zewnętrzne zależności, a tam, gdzie to możliwe, fonty, ikony i obrazy przechowuję lokalnie.",
				],
			},
			{
				title: "Architektura przed implementacją",

				paragraphs: [
					"Przed rozpoczęciem implementacji staram się zrozumieć problem, przeanalizować możliwe podejścia i wybrać strukturę, która pozostanie czytelna i łatwa w utrzymaniu wraz z rozwojem projektu.",
				],
			},
			{
				title: "Dostępność od etapu projektowania",

				paragraphs: [
					"Dostępność uwzględniam już podczas projektowania komponentów, nawigacji i treści. Fundamentem jest semantyczny HTML, a ARIA stosuję wyłącznie tam, gdzie natywne elementy nie wystarczają.",
				],
			},
			{
				title: "Dokumentacja jako część procesu",

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

		evidenceTitle: "Przykłady",

		items: [
			{
				id: "security-by-default",

				title: "Bezpieczeństwo od początku",

				paragraphs: [
					"Projekt celowo ogranicza zbędne zależności zewnętrzne i zachowuje kontrolę nad zasobami używanymi przez stronę.",

					"Decyzje związane z bezpieczeństwem są podejmowane już na etapie projektowania i implementacji, a nie dopiero podczas końcowego przeglądu.",
				],

				implementedItems: [
					"Lokalne fonty zamiast zewnętrznych CDN-ów.",
					"Lokalne ikony SVG.",
					"Minimalna liczba zależności zewnętrznych.",
					"Weryfikacja zależności przed instalacją.",
				],

				evidence: [
					{
						alt: "Fragment pliku package.json pokazujący zależność Astro oraz jawnie zatwierdzony skrypt instalacyjny esbuild.",
						caption: "package.json",
					},
					{
						alt: "Katalog assets projektu pokazujący lokalnie przechowywane fonty Manrope oraz ikony SVG.",
						caption: "Zasoby projektu przechowywane lokalnie",
					},
				],
			},
			{
				id: "architecture-before-implementation",

				title: "Architektura przed implementacją",

				paragraphs: [
					"Przed rozpoczęciem implementacji funkcjonalności najpierw została zaprojektowana ogólna struktura aplikacji. Projekt rozwijał się dzięki komponentom wielokrotnego użytku, danym oddzielonym od warstwy prezentacji oraz niewielkim, stopniowym refaktoryzacjom zamiast jednorazowych rozwiązań.",

					"Dzięki temu możliwe było dodawanie nowych sekcji i obsługi wielu języków oraz wielokrotne wykorzystywanie wspólnych układów bez konieczności przebudowy istniejącego kodu.",
				],

				implementedItems: [
					"Wielokrotnego użytku komponenty Astro.",
					"Architektura oparta na danych.",
					"Obsługa języków oparta na adresach URL.",
					"Małe, iteracyjne zmiany architektoniczne.",
				],

				evidence: [
					{
						alt: "Struktura katalogu src przedstawiająca główne obszary architektury projektu portfolio.",
						caption: "Struktura katalogu src",
					},
					{
						alt: "Katalog components przedstawiający wielokrotnego użytku komponenty Astro wykorzystywane w całym portfolio.",
						caption: "Komponenty wielokrotnego użytku",
					},
				],
			},
			{
				id: "accessibility-by-design",

				title: "Dostępność od etapu projektowania",

				paragraphs: [
					"Dostępność uwzględniam podczas projektowania komponentów, nawigacji i treści, zamiast dodawać ją dopiero po zakończeniu implementacji.",

					"Fundamentem jest semantyczny HTML, a ARIA stosuję wyłącznie tam, gdzie natywne elementy nie zapewniają wystarczającego kontekstu.",
				],

				implementedItems: [
					"Semantyczna struktura HTML.",
					"Nawigacja dostępna z klawiatury.",
					"Widoczne style focusu.",
					"Opisowe teksty alternatywne.",
				],

				evidence: [
					{
						alt: "Semantyczna struktura HTML zastosowana w komponencie Astro.",
						caption: "Semantyczna struktura komponentu",
					},
					{
						alt: "Fragment komponentu nagłówka pokazujący przełącznik języka, przełącznik motywu oraz przycisk mobilnego menu z opisowymi atrybutami dostępności.",
						caption: "Dostępne kontrolki nawigacji",
					},
				],
			},
			{
				id: "documentation-as-part-of-engineering",

				title: "Dokumentacja jako część procesu",

				paragraphs: [
					"Dokumentację traktuję jako część procesu implementacji, a nie osobne zadanie wykonywane dopiero na końcu.",

					"Decyzje architektoniczne, sesje rozwojowe i zasady projektu dokumentuję tak, aby uzasadnienie zmian pozostawało czytelne również po czasie.",
				],

				implementedItems: [
					"Architecture Decision Records.",
					"Notatki z sesji rozwojowych.",
					"Opis projektu i jego zasad inżynierskich.",
					"Udokumentowany zakres commitów i kontekst implementacji.",
				],

				evidence: [
					{
						alt: "Architecture Decision Record opisujący decyzję techniczną w projekcie portfolio.",
						caption: "Architecture Decision Record",
					},
					{
						alt: "Notatka z sesji rozwojowej dokumentujący cel, przebieg implementacji i decyzje projektowe.",
						caption: "Notatka z sesji rozwojowej",
					},
				],
			},
		],
	},
};