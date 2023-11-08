(function () {
  const config = {
    closeOnBackdropClick: true,
  };

  const experimentElement = document.querySelector(".COBR-180");
  const backdropElement = document.querySelector(".COBR-180-backdrop");
  const sidebarElement = document.querySelector(".COBR-180-sidebar");
  const closeButton = document.querySelector(".COBR-180-button-close");

  function hideExperiment() {
    experimentElement.style.display = "none";
    cleanUpListeners();
  }

  function handleCloseSideBar(event) {
    // keystroke has been detected, but only shall pass when Esc key pressed
    if (event.key && event.key !== "Escape") {
      return;
    }

    sidebarElement.classList.add("hidden");
    backdropElement.classList.add("hidden");

    const hideExperimentTimeout = setTimeout(hideExperiment, 2000);
    sidebarElement.addEventListener("animationend", () => {
      clearTimeout(hideExperimentTimeout);
      hideExperiment();
    });
  }

  document.addEventListener("keydown", handleCloseSideBar);
  closeButton.addEventListener("click", handleCloseSideBar);

  config.closeOnBackdropClick &&
    backdropElement.addEventListener("click", handleCloseSideBar);

  function cleanUpListeners() {
    document.removeEventListener("keydown", handleCloseSideBar);
    closeButton.removeEventListener("click", handleCloseSideBar);
    backdropElement.removeEventListener("click", handleCloseSideBar);
  }
})();
