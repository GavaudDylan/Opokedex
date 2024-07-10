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

export function resetMainContainer() {
  const mainContainer = document.querySelector("#main-container");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

export function changeGridClass(containerId, oldGridClass, newGridClass) {
  const container = document.querySelector(containerId);
  const oldClasses = oldGridClass.split(" ");
  const newClasses = newGridClass.split(" ");

  oldClasses.forEach((classeName) => container.classList.remove(classeName));
  newClasses.forEach((classeName) => container.classList.add(classeName));
}
