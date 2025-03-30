import { eodObjReturn } from "./testData.js";
import { createTableHead, createRow } from "./eodtable.js";
import { getEndOfDayStockPrices } from "./apiCalls.js";

function historypage(mainDiv) {
  const container = document.createElement("div");
  mainDiv.appendChild(container);
  container.classList = "d-flex flex-column m-auto";
  const instructions = createInstructions();
  const searchbar = createSearchbar();
  const table = createTable();
  const errorBox = createErrorBox();

  container.appendChild(instructions);
  container.appendChild(searchbar);
  container.appendChild(table);
  container.appendChild(errorBox);

  const eodForm = document.getElementById("eod-form");

  eodForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.query.value.trim().toUpperCase();
    const eodTBody = document.getElementById("eod-tbody");
    clear(errorBox);

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
      const responseData = eodObjReturn.data;
      console.log(responseData);

      if (responseData) {
        responseData.forEach((tickerObj) => {
          const row = createRow(tickerObj);
          eodTBody.appendChild(row);
        });
      } else {
        console.log("No data was found for the provided ticker symbol.");
      }
    } catch (error) {
      console.log(error);
    }
  });
}

function createTable() {
  const container = document.createElement("div");
  container.classList = "card d-flex w-100 h-100 p-2";
  const table = document.createElement("table");
  table.id = "eod-table";
  container.appendChild(table);
  table.classList = "table table-striped";
  const tableHead = createTableHead();
  table.appendChild(tableHead);
  const tbody = document.createElement("tbody");
  tbody.id = "eod-tbody";
  table.appendChild(tbody);
  return container;
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

function createSearchbar() {
  const container = document.createElement("div");
  container.classList = "row m-auto p-5";

  const searchForm = document.createElement("form");
  searchForm.id = "eod-form";
  searchForm.classList = "d-flex m-auto";

  const input = document.createElement("input");
  input.classList = "form-control me-2";
  input.type = "search";
  input.name = "query";
  input.placeholder = "symbol";

  const button = document.createElement("button");
  button.classList = "btn btn-outline-success";
  button.type = "submit";
  button.textContent = "Search";

  container.appendChild(searchForm);
  searchForm.appendChild(input);
  searchForm.appendChild(button);

  return container;
}

function createInstructions() {
  const container = document.createElement("h3");
  container.classList = "m-auto pt-5";
  container.textContent = "Get the last 180 days of stock information.";
  return container;
}

export default historypage;
