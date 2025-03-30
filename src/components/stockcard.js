function createCard(stockObj) {
  const card = document.createElement("div");
  card.classList = "card shadow p-3 mb-5 bg-body-tertiary rounded";
  card.style = "width: 20rem";

  const perChange =
    ((stockObj.price - stockObj.previous_close_price) /
      stockObj.previous_close_price) *
    100;

  const closeDate = new Date(stockObj.last_trade_time);
  const date = closeDate.toLocaleDateString();
  const time = closeDate.toLocaleTimeString();

  card.innerHTML = `
    <div class="card-body fade-in">
      <h4 class="card-title">${stockObj.ticker}</h5>
      <h5 class="card-subtitle mb-2 text-body-secondary">${stockObj.name}</h6>
      <p class="card-text">
        <b>Current Price:</b> $${stockObj.price} ${stockObj.currency}<br>
        <strong>Change Amt:</strong> ${stockObj.day_change}<br>
        <strong>Percent Change:</strong> ${perChange.toFixed(2)}%<br>
        <strong>Trading Volume:</strong> ${stockObj.volume}<br>
        <strong>Last Close Date:</strong> ${date}<br>
        <strong>Last Close Time:</strong> ${time}
      </p>
    </div>
  `;
  return card;
}

export default createCard;
