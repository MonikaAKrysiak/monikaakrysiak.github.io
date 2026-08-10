export const pl = {
	navigation: {
		about: "O mnie",
		work: "Wybrane projekty",
		hobbies: "Zainteresowania",
		contact: "Kontakt",
	},

	hero: {
		role: "QA Engineer specjalizująca się bezpieczeństwem aplikacji",
		statementFirstLine: "Dobre oprogramowanie powinno być nie tylko funkcjonalne, ale także bezpieczne.",
		viewCv: "Zobacz CV (PDF)",
		contact: "Kontakt",
	},
	
	about: {
		title: "O mnie",

		paragraphs: [
			"Od ponad 10 lat pracuję jako Quality Assurance Engineer, specjalizując się w bezpieczeństwie aplikacji.",

			"Wierzę, że bezpieczeństwo powinno być uwzględniane od samego początku procesu tworzenia oprogramowania, a nie dodawane dopiero na końcu.",

			"Lubię rozumieć, jak działają aplikacje, znajdować potencjalne problemy i zadawać pytania, które pomagają zespołom rozwiązywać je, zanim trafią do użytkowników. Chętnie współpracuję z\u00A0programistami, analizuję wymagania i zgłoszenia oraz tworzę dokumentację, która ułatwia codzienną pracę całego zespołu.",

			"Wierzę, że dobre oprogramowanie powinno być funkcjonalne, niezawodne i bezpieczne. To podejście staram się wnosić do każdego projektu, nad którym pracuję.",

			"Po pracy lubię odkrywać nowe miejsca - podczas pieszych wędrówek, na rowerze lub w kajaku. Cenię również gry planszowe, projekty DIY oraz czas spędzany z rodziną.",
		],
	},

	contact: {
		title: "Kontakt",
		introFirstLine: "Masz pytanie, pomysł lub propozycję współpracy?",
		introSecondLine: "Zapraszam do kontaktu.",
	},

		selectedWork: {
		readCaseStudy: "Czytaj case study",
	},

	backLink: {
		toSelectedWork: "Wróć do wybranych projektów",
		toHobbies: "Wróć do zainteresowań",
	},

	caseStudyNavigation: {
		allWork: "Zobacz wszystkie projekty",
	},

	footer: {
		statement:
			"Tworzę rozwiązania, które są funkcjonalne, niezawodne i bezpieczne.",
		builtWith: "Zbudowane przy użyciu:",
		designedWith: "Zaprojektowane z myślą o:",
		designPrinciples:
			"Dostępności • Bezpieczeństwie",
		aiDisclosure: "Wykorzystanie AI",
		aiDisclosureText:
			"AI wykorzystuję jako narzędzie wspierające przy tworzeniu wybranych ilustracji oraz anonimizacji materiałów prezentowanych w case studies. Opisane w portfolio doświadczenie, projekty i praca odzwierciedlają moje rzeczywiste działania.",
	},

	hobbies: {
		readMore: "Czytaj więcej",
		readFullStory: "Przeczytaj całą historię",
		hideStory: "Ukryj historię",
	},

	externalLink: {
		opensInNewTab: " - otwiera się w nowej karcie",
	},

	skipLink: {
		skipToMainContent: "Przejdź do głównej treści",
	},

	accessibility: {
		openMenu: "Otwórz menu",
		closeMenu: "Zamknij menu",

		switchToLightTheme: "Przełącz na jasny motyw",
		switchToDarkTheme: "Przełącz na ciemny motyw",

		homepage: "strona główna",

		opensInNewTab: "otwiera się w nowej karcie",

		externalProfile: (service: string) =>
			`Profil ${service} (otwiera się w nowej karcie)`,

		externalLink: (label: string) =>
			`${label} (otwiera się w nowej karcie)`,

		closeDialog: "Zamknij okno dialogowe",

		openLargerImage: (alt: string) =>
			`Powiększ obraz: ${alt}`,

		largerImageView: (alt: string) =>
			`Powiększony obraz: ${alt}`,

		closeImagePreview: "Zamknij podgląd obrazu",

		caseStudyNavigation: "Nawigacja między case studies",

		previousCaseStudy: (label: string) =>
			`Przejdź do poprzedniego case study: ${label}`,

		nextCaseStudy: (label: string) =>
			`Przejdź do następnego case study: ${label}`,
		
	},
};