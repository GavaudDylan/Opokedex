export function initClosingModalButtons() {
  const closingButtons = document.querySelectorAll(".close-modal");
  closingButtons.forEach((closingButton) => {
    closingButton.addEventListener("click", closeActivemodal);
  });
}

export function closeActivemodal() {
  const activeModal = document.querySelector(".is-active");
  activeModal.classList.remove("is-active");
}
