export const beyondTesting = {
	header: {
		title: "Więcej niż testowanie",

		summary:
			"Jakość zaczyna się od zrozumienia produktu, ludzi i procesów, a nie od wykonywania testów.",

		focusAreas: [
			"Inżynieria jakości",
			"Analiza biznesowa",
			"Myślenie produktowe",
			"Współpraca",
		],
	},
	
	navigation: {
		approach: "Moje podejście",
		stories: "Historie z praktyki",
		visualDocumentation: "Dokumentacja wizualna",
	},

	overview: {
		title: "Moje podejście",

		paragraphs: [
			"W swojej karierze wielokrotnie wychodziłam poza tradycyjny zakres obowiązków QA. Testowanie zawsze pozostawało ważnym elementem mojej pracy, jednak dostarczanie jakości często wymagało zrozumienia celów biznesowych, analizy wymagań oraz wspierania zespołu w podejmowaniu lepszych decyzji jeszcze przed rozpoczęciem implementacji.",

			"Postrzegam Quality Engineering jako łączenie ludzi, produktu i technologii. Może to oznaczać wykrycie ryzyka już na etapie analizy wymagań, uproszczenie złożonego procesu lub zakwestionowanie założeń przed rozpoczęciem prac.",
		],
	},

	impactStories: {
		title: "Wpływ wykraczający poza testowanie",

		items: [
			{
				title: "Wykrycie luki bezpieczeństwa jeszcze przed implementacją",

				description:
					"Analizując wymagania, zauważyłam, że każdy użytkownik będzie mógł zmieniać dane siedziby firmy, zamiast ograniczyć tę możliwość wyłącznie do administratorów. W praktyce mogłoby to doprowadzić do wysyłania faktur i innych dokumentów na nieprawidłowe dane.",

				outcome:
					"Ryzyko zostało wykryte jeszcze przed rozpoczęciem implementacji, dzięki czemu model uprawnień mógł zostać poprawiony na etapie projektowania.",

				focusAreas: [
					"Bezpieczeństwo",
					"Analiza wymagań",
					"Zapobieganie",
				],
			},

			{
				title: "Zamiana 300 stron tabel na czytelną wizualizację",

				description:
					"Projekt zakładał generowanie około 300 stron tabel. Zakwestionowałam takie rozwiązanie, argumentując, że klient potrzebuje przede wszystkim szybkiego dostępu do najważniejszych informacji, a nie setek stron danych.",

					outcome:
						"Po zmianie Analityka Biznesowego i Product Ownera pomysł został ponownie przeanalizowany i wdrożony w postaci znacznie bardziej przejrzystej wizualizacji.",

					focusAreas: [
						"Myślenie produktowe",
						"Potrzeby użytkownika",
						"Analiza biznesowa",
					],
				},

				{
					title: "Dostosowanie planu wydania, gdy funkcjonalności stały się zależne",

					description:
						"Dwie niezależne funkcjonalności były rozwijane w osobnych repozytoriach, jednak obie wprowadzały zmiany do wspólnego repozytorium frontendowego stanowiącego warstwę integracyjną. W trakcie prac okazało się, że zmiany są ze sobą na tyle powiązane, że nie można ich było przetestować ani wdrożyć niezależnie.",

					outcome:
						"Zamiast poświęcać dodatkowy czas na rozdzielanie zmian, przedstawiłam klientowi sytuację, zaproponowałam zmianę strategii testów oraz przeprowadzenie szerszej regresji. Ostatecznie obie funkcjonalności zostały wydane jednocześnie, co zwiększyło pewność co do jakości całego rozwiązania",

					focusAreas: [
						"Zarządzanie ryzykiem",
						"Planowanie wydań",
						"Komunikacja",
					],
				},

				{
					title: "Świadoma rezygnacja z niepotrzebnej funkcjonalności",

					description:
						"Zespół deweloperski zaproponował rozbudowę aplikacji o nową funkcjonalność, która nie była wcześniej omawiana z klientem. Zakwestionowałam sens jej implementacji, ponieważ nie wynikała z rzeczywistych potrzeb użytkowników.",

					outcome:
						"Potwierdziliśmy, że funkcjonalność nie wnosi wartości biznesowej i uniknęliśmy poświęcenia czasu na rozwój rozwiązania, którego klient nie potrzebował.",

					focusAreas: [
						"Myślenie krytyczne",
						"Efektywność",
						"Perspektywa interesariuszy",
					],
				},

				{
					title: "Od pomysłu klienta do wspólnie wypracowanego rozwiązania",

					description:
						"Klienci często przedstawiają jedynie ogólną wizję rozwiązania. Moim zadaniem jest zadawanie pytań, analizowanie możliwości obecnej aplikacji oraz proponowanie kierunku, zanim zespół rozpocznie implementację.",

					outcome:
						"Klient i zespół osiągnęli wspólne zrozumienie rozwiązania jeszcze przed rozpoczęciem prac programistycznych.",

					focusAreas: [
						"Analiza biznesowa",
						"Myślenie produktowe",
						"Współpraca",
					],
				},

			],
		},

		visualDocumentation: {
			title: "Przekładanie złożonych systemów na zrozumiałe procesy",
			imageAlt:
    			"Zanonimizowany diagram przedstawiający złożony proces biznesowy, jego wyjątki oraz integracje z zewnętrznymi systemami.",

			paragraphs: [
				"W okresie częstych zmian w składzie zespołu przygotowałam wizualną dokumentację, aby złożone procesy biznesowe były zrozumiałe również dla osób, które dopiero dołączały do projektu.",

				"Zamiast opierać się wyłącznie na opisie tekstowym, połączyłam zrzuty ekranu, diagramy przepływów i opisy integracji z zewnętrznymi systemami.",
			],

			includesTitle: "Co zawierała dokumentacja",

			includes: [
				"pełny przebieg procesu krok po kroku",
				"wyjątki i alternatywne ścieżki",
				"zrzuty ekranu z najważniejszych etapów",
				"zewnętrzne systemy i punkty integracji",
				"widoczne wąskie gardła procesu",
			],

			focusAreas: [
				"Dzielenie się wiedzą",
				"Dokumentacja wizualna",
				"Onboarding",
				"Przejrzystość procesów",
			],

			impactTitle: "Wpływ",

			outcome:
				"Dokumentacja przyspieszyła onboarding, usprawniła komunikację w zespole i pozostała przydatna mimo późniejszych zmian w aplikacji.",
		},
};