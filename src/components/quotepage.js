import { stockObjReturn } from "./testData.js";
import createSearchbar from "./searchbar.js";
import createCard from "./stockcard";
import { getCurrentStockPrices } from "./apiCalls.js";

function quotepage(mainDiv) {
  const container = document.createElement("div");
  mainDiv.appendChild(container);
  container.classList = "d-flex flex-column m-auto";
  const instructions = createInstructions();
  const searchbar = createSearchbar();
  const infobox = createInfobox();
  container.appendChild(instructions);
  container.appendChild(searchbar);
  container.appendChild(infobox);

  const searchForm = searchbar.firstElementChild;

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const tickers = e.target.elements.query.value;
    const tickerArray = tickers
      .split(",")
      .map((ticker) => ticker.trim().toUpperCase())
      .filter((ticker) => ticker !== "");

    const errorMessage = checkErrorMessage(tickerArray);
    clear(infobox);

    const err = document.createElement("h4");
    err.style.color = "red";

    if (errorMessage) {
      switch (errorMessage) {
        case "empty":
          err.textContent = "You must have at least one symbol in your query.";
          break;
        case "length":
          err.textContent =
            "Your symbols are too long and must be under 6 characters long.";
          break;
        case "space":
          err.textContent =
            "You may have placed a 'space' in the middle of your ticker symbol.";
          break;
        default:
          err.textContent =
            "Symbols should be no more than five characters long and separted by commas.";
      }

      infobox.appendChild(err);
    } else {
      try {
        const responseObj = await getCurrentStockPrices(...tickerArray);
        const responseData = responseObj.data.data; // weird, I know
        // const responseData = stockObjReturn.data;
        console.log(responseData);

        if (responseData) {
          responseData.forEach((tickerObj) => {
            const card = createCard(tickerObj);
            infobox.appendChild(card);
            // transition effect in style.css
            setTimeout(() => {
              card.classList.add("fade-in");
            }, 10);
          });
        } else {
          err.textContent =
            "No data was found for the provided ticker symbols.";
          infobox.appendChild(err);
        }
      } catch (error) {
        err.textContent =
          "There was an error fetching stock prices. Please try again later.";
        infobox.appendChild(err);
        console.log(error);
      }
    }
  });
}

function createInfobox() {
  const infoBoxDiv = document.createElement("div");
  infoBoxDiv.classList = "d-flex w-100 h-100 gap-5";
  // infoBoxDiv.style = "border: 1px solid red";

  return infoBoxDiv;
}

function checkErrorMessage(tickArr) {
  if (tickArr.length === 0) {
    console.log("empty");
    return "empty";
  }
  for (let ticker of tickArr) {
    if (ticker.includes(" ")) {
      return "space";
    } else if (ticker.length > 5) {
      return "length";
    }
  }
  return "";
}

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createInstructions() {
  const container = document.createElement("h3");
  container.classList = "m-auto pt-5 fw-bold text-primary";
  container.textContent = "Search using ticker symbols. Maximum of 3.";
  return container;
}

export default quotepage;
