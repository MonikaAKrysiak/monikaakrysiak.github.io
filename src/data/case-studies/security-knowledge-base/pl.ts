import githubIcon from "../../../assets/icons/github.svg";

export const securityKnowledgeBase = {
	header: {
		title: "Budowanie wiedzy o bezpieczeństwie",

		summary:
			"Tworzenie praktycznego ekosystemu wiedzy o bezpieczeństwie, który pomagał QA oraz innym członkom zespołu lepiej rozumieć, wykorzystywać i rozwijać wiedzę z zakresu Application Security.",

		focusAreas: [
			"Application Security",
			"OWASP ASVS",
			"Edukacja",
			"Knowledge Sharing",
			"QA Enablement",
		],
	},

	overview: {
		title: "Przegląd",

		paragraphs: [
			"Wiedza z zakresu bezpieczeństwa aplikacji była rozproszona pomiędzy standardami, zewnętrznymi materiałami edukacyjnymi, wewnętrzną dokumentacją oraz doświadczeniem poszczególnych osób. Dla osób rozpoczynających naukę Application Security trudno było określić, od czego zacząć i jak wykorzystać tę wiedzę podczas codziennego testowania.",

			"Moim celem nie było tworzenie kolejnych stron dokumentacji. Chciałam zbudować praktyczny ekosystem wiedzy, który ułatwiałby naukę, codzienną pracę oraz dzielenie się doświadczeniem na różnych poziomach zaawansowania.",

			"Z czasem ekosystem rozrósł się o uproszczony proces przeglądu oparty na OWASP ASVS, praktyczne przewodniki testowe, opracowania laboratoriów PortSwigger Academy, materiały onboardingowe, quizy oraz wskazówki dotyczące bezpieczeństwa dla całej firmy.",
		],
	},

	knowledgeEcosystem: {
		title: "Budowanie ekosystemu wiedzy",

		introduction:
			"Zamiast tworzyć pojedyncze dokumenty, skupiłam się na budowie spójnego ekosystemu, w którym praktyczne przewodniki, materiały edukacyjne i gotowe szablony wspierały kolejne etapy nauki bezpieczeństwa.",

		areas: [
			{
				title: "Praktyczne wykorzystanie ASVS",
				summary: "Przekształcenie złożonego standardu w proces przydatny w codziennej pracy QA.",

				description:
					"Wspólnie z zespołem uprościliśmy OWASP ASVS do procesu, który QA mogli realnie wykorzystywać podczas codziennych testów bezpieczeństwa.",

				highlights: [
					"Uproszczona checklista ASVS",
					"Śledzenie postępów przeglądu",
					"Szablon raportu bezpieczeństwa",
					"Przygotowane wspólnie z zespołem",
				],
			},

			{
				title: "Codzienne testowanie bezpieczeństwa",
				summary: "Przewodniki krok po kroku wspierające praktyczne testowanie mechanizmów bezpieczeństwa.",

				description:
					"Praktyczne przewodniki krok po kroku pokazywały, jak weryfikować najczęściej spotykane mechanizmy bezpieczeństwa oraz dobre praktyki testowania.",

				highlights: [
					"Uwierzytelnianie",
					"Nagłówki bezpieczeństwa",
					"Formularze",
					"Przesyłanie plików",
					"Dobre praktyki testowania",
				],
			},

			{
				title: "Nauka przez praktykę",
				summary: "Nauka poprzez laboratoria, notatki i wyjaśnianie sposobu dochodzenia do rozwiązania.",

				description:
					"Dedykowana przestrzeń w Confluence zawierała opracowania wybranych laboratoriów PortSwigger Academy, tłumacząc zarówno podatności, jak i sposób dochodzenia do rozwiązania.",

				highlights: [
					"Opis podatności",
					"Notatki z nauki",
					"Instrukcje krok po kroku",
					"Wnioski",
				],
			},

			{
				title: "Bezpieczeństwo poza developmentem",
				summary: "Praktyczne materiały budujące świadomość bezpieczeństwa w całej firmie.",

				description:
					"Materiały dotyczące bezpieczeństwa wykraczały poza tworzenie oprogramowania i pomagały budować dobre nawyki w codziennej pracy całej firmy.",

				highlights: [
					"Zarządzanie hasłami",
					"Bezpieczna praca zdalna",
					"Bezpieczne podróżowanie",
					"Świadomość bezpieczeństwa",
				],
			},
		],
		cycle: {
			title: "Cykl rozwoju wiedzy o bezpieczeństwie",

			description:
				"Ciągły cykl, który rozwija wiedzę o bezpieczeństwie w zespołach.",

			steps: [
				"Ucz się",
				"Wdrażaj",
				"Dziel się",
				"Rozwijaj",
			],
		},
	},
	exampleResources: {
		title: "Przykładowe materiały",

		introduction:
			"Kilka przykładów praktycznych materiałów, które ułatwiały wykorzystywanie wiedzy o bezpieczeństwie w codziennej pracy.",

		resources: [
			{
				title: "Uproszczona checklista ASVS",

				description:
					"Praktyczna checklista ze statusem przeglądu, notatkami i wielokrotnego użytku szablonem raportu bezpieczeństwa.",
			},
			{
				title: "Opracowanie laboratorium PortSwigger",

				description:
					"Opis podatności, notatki z nauki i rozwiązanie krok po kroku dla wybranych laboratoriów.",
			},
			{
				title: "Wewnętrzny quiz bezpieczeństwa",

				description:
					"Przykładowe pytania wykorzystywane do utrwalania wiedzy i wspierania regularnej nauki.",
			},
		],
	},
	knowledgeInPractice: {
		title: "Wiedza w praktyce",

		introduction:
			"Wartość bazy wiedzy nie była mierzona liczbą utworzonych dokumentów. Liczyło się to, jak często pomagała podejmować lepsze decyzje dotyczące bezpieczeństwa w codziennej pracy.",

		items: [
			{
				title: "Codzienna praca QA",
				description:
					"Wiedza z obszaru bezpieczeństwa wspierała analizę zadań, przygotowywanie scenariuszy testowych oraz wcześniejsze wykrywanie brakujących lub ryzykownych wymagań.",
			},
			{
				title: "Onboarding",
				description:
					"Praktyczne materiały dawały nowym osobom wyraźniejszy punkt startowy i ograniczały konieczność wielokrotnego tłumaczenia tych samych zagadnień.",
			},
			{
				title: "Dzielenie się wiedzą",
				description:
					"Sesje w ramach Security Month, quizy i rozmowy w zespole pomagały utrzymywać temat bezpieczeństwa na co dzień oraz wspierały ciągłe uczenie się.",
			},
		],
	},	
	whatILearned: {
		title: "Czego się nauczyłam",

		paragraphs: [
			"Tworzenie bazy wiedzy o bezpieczeństwie nigdy nie polegało na pisaniu dokumentacji dla samej dokumentacji. Największym wyzwaniem było sprawienie, aby wiedza była łatwa do znalezienia, zrozumienia i wykorzystania w codziennej pracy.",

			"Nauczyłam się, że skuteczne dzielenie się wiedzą zależy nie tylko od kompetencji technicznych, ale również od dobrej struktury, współpracy i ciągłego rozwijania materiałów.",
		],
	},
};