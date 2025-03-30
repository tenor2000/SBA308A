import { newsObjReturn } from "./testData.js";
import createSearchbar from "./searchbar.js";
import createNewsCard from "./newsCard.js";
import { getStockNews } from "./apiCalls.js";

function newspage(mainDiv) {
  const container = document.createElement("div");
  mainDiv.appendChild(container);
  container.classList = "d-flex flex-column m-auto";
  const instructions = createInstructions();
  const searchbar = createSearchbar();
  const errorBox = createErrorBox();
  const infoBox = createInfoBox();

  container.appendChild(instructions);
  container.appendChild(searchbar);
  container.appendChild(errorBox);
  container.appendChild(infoBox);

  const newsForm = container.firstElementChild;

  newsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.query.value.trim().toUpperCase();
    clear(errorBox);
    clear(infoBox);

    if (!ticker) {
      errorBox.textContent = "Please enter a symbol.";
      return;
    } else if (ticker.includes(" ") | ticker.includes(",")) {
      errorBox.textContent = "Please enter only one symbol";
      return;
    } else if (ticker.length > 5) {
      errorBox.textContent = "Symbol is too long to be valid";
      return;
    }
    try {
      // const responseObj = await getEndOfDayStockPrices(ticker);
      // const responseData = responseObj.data.data; // weird, I know
      const responseData = newsObjReturn.data;
      console.log(responseData);

      if (responseData) {
        responseData.forEach((newsObj) => {
          const card = createNewsCard(newsObj);
          eodTBody.appendChild(card);
        });
      } else {
        console.log("No news was found for the provided ticker symbol.");
      }
    } catch (error) {
      console.log(error);
    }
  });
}

function createInfoBox() {
  const infoBoxDiv = document.createElement("div");
  infoBoxDiv.classList = "d-flex w-100 h-100 gap-5";
  // infoBoxDiv.style = "border: 1px solid red";

  return infoBoxDiv;
}

function createErrorBox() {
  const container = document.createElement("h4");
  container.style.color = "red";
  container.style.textAlign = "center";
  return container;
}

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createInstructions() {
  const container = document.createElement("h3");
  container.classList = "m-auto pt-5";
  container.textContent = "Get the last 180 days of stock information.";
  return container;
}

export default newspage;
