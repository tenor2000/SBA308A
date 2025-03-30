function createCard(stockObj) {
  const card = document.createElement("div");
  card.classList = "card";
  card.style = "width: 18rem";

  const perChange =
    ((stockObj.price - stockObj.previous_close_price) /
      stockObj.previous_close_price) *
    100;

  const closeDate = new Date(stockObj.last_trade_time).toLocaleString();

  card.innerHTML = `
    <div class="card-body fade-in">
      <h4 class="card-title">${stockObj.ticker}</h5>
      <h5 class="card-subtitle mb-2 text-body-secondary">${stockObj.name}</h6>
      <p class="card-text">
        <b>Current Price:</b> $${stockObj.price} ${stockObj.currency}<br>
        <strong>Change Amt:</strong> ${stockObj.day_change}<br>
        <strong>Percent Change:</strong> ${perChange.toFixed(2)}%<br>
        <strong>Trading Volume:</strong> ${stockObj.volume}
        <strong>Last Closing:</strong> ${closeDate}
      </p>
    </div>
  `;
  return card;
}

export default createCard;
