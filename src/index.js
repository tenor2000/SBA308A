import { getCurrentStockPrices } from "./components/apiCalls";
import createTestAction from "./components/testAction";

// for testing
createTestAction(
  getCurrentStockPrices("AAPL", "TSLA", "V"),
  "Test stock Prices"
);

window.onhashchange = loadPage;

function loadPage() {
  const main = document.getElementById("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  switch (location.hash) {
    case "#home":
      console.log("Going Home");
      break;
    case "#news":
      console.log("Going News");
      break;
    case "#quote":
      console.log("Going quote");
      break;
    default:
      console.log("Not found");
  }
}
