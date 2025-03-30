import pageNotFound from "./components/404page";
import { getCurrentStockPrices } from "./components/apiCalls";
import homepage from "./components/homepage";
import newspage from "./components/newspage";
import quotepage from "./components/quotepage";
import historypage from "./components/historypage";
import createTestAction from "./components/testAction";

// for testing
createTestAction(
  () => getCurrentStockPrices("AAPL", "TSLA", "V"),
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
      homepage(main);
      break;
    case "#news":
      newspage(main);
      break;
    case "#quote":
      quotepage(main);
      break;
    case "#history":
      historypage(main);
      break;
    default:
      console.log("Not found");
      pageNotFound(main);
  }
}
