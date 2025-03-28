import pageNotFound from "./components/404page";
import { getCurrentStockPrices } from "./components/apiCalls";
import homepage from "./components/homepage";
import newspage from "./components/newspage";
import quotepage from "./components/quotepage";
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
    case "#":
      console.log("Going Home");
      homepage(main);
      break;
    case "#home":
      console.log("Going Home");
      homepage(main);
      break;
    case "#news":
      console.log("Going News");
      newspage(main);
      break;
    case "#quote":
      console.log("Going quote");
      quotepage(main);
      break;
    default:
      console.log("Not found");
      pageNotFound(main);
  }
}
