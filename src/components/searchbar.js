function createSearchbar() {
  const container = document.createElement("div");
  container.classList = "row m-auto p-5";

  const searchForm = document.createElement("form");
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

export default createSearchbar;
