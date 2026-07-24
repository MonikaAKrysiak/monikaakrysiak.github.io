import { navigationToggle, updateNavigationToggle } from "./Header.astro.0.mts";

if (navigationToggle instanceof HTMLButtonElement) {
navigationToggle.addEventListener("click", () => {
const header = navigationToggle.closest(".site-header");

if (!(header instanceof HTMLElement)) {
return;
}

const isOpen = header.classList.toggle("navigation-open");

updateNavigationToggle(navigationToggle, isOpen);
});
}
