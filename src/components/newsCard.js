function createNewsCard(newsObj) {
  const card = document.createElement("div");
  card.classList = "card shadow p-3 mb-5 bg-body-tertiary rounded";
  card.style = "max-width: 80%";

  card.innerHTML = `
    <img src="${newsObj.image_url}" class="card-image-top" alt="news image">
    <div class="card-body">
      <h4 class="card-title">${newsObj.title}</h5>
      <h5 class="card-subtitle mb-2 text-body-secondary">${newsObj.description}</h6>
      <p class="card-text">
        ${newsObj.snippet}
      </p>
      <a href=${newsObj.url} class="btn btn-primary" target="_blank">${newsObj.source}</a>
    </div>
  `;
  return card;
}

export default createNewsCard;
