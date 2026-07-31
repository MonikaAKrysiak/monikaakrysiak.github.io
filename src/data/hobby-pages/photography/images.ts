import photographyBlueTit from "../../../assets/hobbies/photography/photography-blue-tit.jpg";
import photographyPantherChameleon from "../../../assets/hobbies/photography/photography-panther-chameleon.jpg";
import photographyTarantulaMacro from "../../../assets/hobbies/photography/photography-tarantula-macro.jpg";
import photographyTorunRiverside from "../../../assets/hobbies/photography/photography-torun-riverside.jpg";
import photographyCastleRuinsFrame from "../../../assets/hobbies/photography/photography-castle-ruins-frame.jpg";
import photographyDunajecRafting from "../../../assets/hobbies/photography/photography-dunajec-rafting.jpg";

import type { HobbyGalleryImage } from "../index";

export const photographyImages: HobbyGalleryImage[] = [
	{
		image: photographyBlueTit,
		alt: {
			en: "Blue tit perched on the garden fence outside my kitchen window.",
			pl: "Modraszka siedząca na ogrodowym płocie za oknem mojej kuchni.",
		},
		caption: {
			en: "A regular garden visitor",
			pl: "Stały gość w ogrodzie",
		},
	},
	{
		image: photographyPantherChameleon,
		alt: {
			en: "Panther chameleon photographed at the Egzotyczne Kaszuby Zoo.",
			pl: "Kameleon lamparci sfotografowany w Zoo Egzotyczne Kaszuby.",
		},
		caption: {
			en: "Panther chameleon at Egzotyczne Kaszuby",
			pl: "Kameleon lamparci – Egzotyczne Kaszuby",
		},
	},
	{
		image: photographyTarantulaMacro,
		alt: {
			en: "Tarantula photographed at the Sosnowiec Egzotarium.",
			pl: "Ptasznik sfotografowany w Egzotarium w Sosnowcu.",
		},
		caption: {
			en: "Tarantula at the Sosnowiec Egzotarium",
			pl: "Ptasznik – Egzotarium w Sosnowcu",
		},
	},
		{
		image: photographyCastleRuinsFrame,
		alt: {
			en: "Ruins of Pilcza Castle in Smoleń seen through an opening in the stocks.",
			pl: "Ruiny zamku Pilcza w Smoleniu widziane przez otwór w dybach.",
		},
		caption: {
			en: "Pilcza Castle ruins framed by the stocks",
			pl: "Ruiny zamku Pilcza widziane przez dyby",
		},
	},
	{
		image: photographyTorunRiverside,
		alt: {
			en: "Evening view of Toruń during a cycling trip around the city.",
			pl: "Wieczorny widok na Toruń podczas rowerowego zwiedzania miasta.",
		},
		caption: {
			en: "Cycling through Toruń at dusk",
			pl: "Rowerowy wieczór w Toruniu",
		},
	},
	{
		image: photographyDunajecRafting,
		alt: {
			en: "View from a traditional raft during a trip through the Dunajec Gorge.",
			pl: "Widok z tratwy podczas spływu Przełomem Dunajca.",
		},
		caption: {
			en: "A view from the Dunajec raft",
			pl: "Widok z tratwy na Dunajcu",
		},
	},
];