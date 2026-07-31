import type { Language } from "../../../i18n";
import type { NavigationItem } from "../../../types/navigation";

import { photography as en } from "./en";
import { photography as pl } from "./pl";

export { en, pl };

export function getPhotographyNavigation(
	lang: Language,
): NavigationItem[] {
	return [
		{
			label:
				lang === "pl"
					? "O fotografii"
					: "About photography",
			href: "#photography-about",
		},
		{
			label:
				lang === "pl"
					? "Galeria"
					: "Gallery",
			href: "#photography-gallery",
		},
		{
			label: "Instagram",
			href: "#photography-external",
		},
	];
}