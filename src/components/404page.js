function pageNotFound(mainDiv) {
  const page = document.createElement("h1");
  page.textContent =
    "Sorry you have stumbled into a place of ill repute. Nothing to see here.";

  mainDiv.appendChild(page);
}

export default pageNotFound;
