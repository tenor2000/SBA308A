function homepage(mainDiv) {
  const container = document.createElement("div");
  container.classList =
    "card text-center my-5 p-4 border rounded shadow bg-light m-auto";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Stock Looker Upper!";
  heading.classList = "mb-3 text-primary fw-bold";

  const subheading = document.createElement("p");
  subheading.textContent =
    "Track real-time stock prices, get the latest financial news, and explore historical trends with ease.";
  subheading.classList = "lead mb-4 text-secondary";

  const heroImg = document.createElement("img");
  heroImg.src =
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=640&h=351&dpr=1";
  heroImg.alt = "stock image of stock image";
  heroImg.classList.add("rounded");

  const buttonDiv = document.createElement("div");
  buttonDiv.classList = "d-flex p-3 gap-3 justify-content-center";

  const newsButton = document.createElement("a");
  newsButton.textContent = "Get News";
  newsButton.classList = "btn btn-primary btn-lg";
  newsButton.href = "#news";
  buttonDiv.appendChild(newsButton);

  const quoteButton = document.createElement("a");
  quoteButton.textContent = "Get Quotes";
  quoteButton.classList = "btn btn-primary btn-lg";
  quoteButton.href = "#quote";
  buttonDiv.appendChild(quoteButton);

  const historyButton = document.createElement("a");
  historyButton.textContent = "Get History";
  historyButton.classList = "btn btn-primary btn-lg";
  historyButton.href = "#history";
  buttonDiv.appendChild(historyButton);

  container.appendChild(heading);
  container.appendChild(subheading);
  container.appendChild(heroImg);
  container.appendChild(buttonDiv);

  mainDiv.appendChild(container);
  // transition effect in style.css
  setTimeout(() => {
    container.classList.add("fade-in");
  }, 10);
}

export default homepage;
