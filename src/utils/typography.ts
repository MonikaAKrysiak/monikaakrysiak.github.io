import type { Language } from "../i18n";

export function formatTypography(
	text: string,
	lang: Language
): string {
	if (lang !== "pl") {
		return text;
	}

	return text.replace(
        /\b([aiouwzAIOUWZ])\s/g,
        "$1\u00A0"
    );
}