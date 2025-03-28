function pageNotFound(mainDiv) {
  const page = document.createElement("div");
  page.classList = "d-flex flex-column m-auto p-5 text-center";

  const h1 = document.createElement("h1");
  h1.textContent = "Were you looking for Cat Photos?";

  const para = document.createElement("p");
  para.textContent = "Sorry, this page doesn't exist. Maybe next time.";

  const image = document.createElement("img");
  image.src = "https://i.gifer.com/2GU.gif";
  image.alt = "cat furiously typing";

  page.appendChild(h1);
  page.appendChild(image);
  page.appendChild(para);
  mainDiv.appendChild(page);
}

export default pageNotFound;
