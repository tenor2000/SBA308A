import pageNotFound from "./components/404page";
import homepage from "./components/homepage";
import newspage from "./components/newspage";
import quotepage from "./components/quotepage";
import historypage from "./components/historypage";

window.onhashchange = loadPage;

window.onload = function () {
  if (!location.hash || location.hash === "#") {
    location.hash = "#home";
  } else {
    loadPage();
  }
};

function loadPage() {
  const main = document.getElementById("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  switch (location.hash) {
    case "":
    case "#":
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
