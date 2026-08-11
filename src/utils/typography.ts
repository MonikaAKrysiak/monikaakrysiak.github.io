import type { Language } from "../i18n";

export function formatTypography(
	text: string,
	lang: Language
): string {
	if (lang === "pl") {
		return text.replace(
			/(?<!\p{L})(a|i|o|u|w|z|do|ku|na|od|po|da|tę|tą|one|on|ona|co|di|dla|jej|już|we|mi|za|ze|gdy|te|to|go|lub|albo|jak|nie|ale|się|ich|że|są|niż|coś|czy)\s/giu,
			"$1\u00A0"
		);
	}

	if (lang === "en") {
		return text.replace(
			/\b(a|an|and|as|at|by|in|of|on|or|to|we|me|she|he|his|her|my|us|so|I|it|but|for|the|are|is|up|do|has|had)\s/gi,
			"$1\u00A0"
		);
	}

	return text;
}