const openButtons = document.querySelectorAll("[data-dialog-open]");

openButtons.forEach((openButton) => {
	if (!(openButton instanceof HTMLButtonElement)) {
		return;
	}

	const dialogId = openButton.dataset.dialogOpen;

	if (!dialogId) {
		return;
	}

	const dialog = document.getElementById(dialogId);

	if (!(dialog instanceof HTMLDialogElement)) {
		return;
	}

	const closeButton = dialog.querySelector("[data-dialog-close]");

	const openDialog = () => {
		dialog.showModal();
	};

	const closeDialog = () => {
		dialog.close();
	};

	openButton.addEventListener("click", openDialog);

	dialog.addEventListener("close", () => {
		openButton.focus();
	});

	closeButton?.addEventListener("click", closeDialog);

	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) {
			closeDialog();
		}
	});
});