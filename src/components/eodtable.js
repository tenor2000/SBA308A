export function createRow(stockObj) {
  const row = document.createElement("tr");
  const date = new Date(stockObj.date).toLocaleDateString();

  row.innerHTML = `
    <td>${date}</td>
    <td>${stockObj.open}</td>
    <td>${stockObj.high}</td>
    <td>${stockObj.low}</td>
    <td>${stockObj.close}</td>
  `;

  return row;
}

export function createTableHead() {
  const thead = document.createElement("thead");
  const row = document.createElement("tr");
  thead.appendChild(row);

  const headArr = ["Date", "Open", "High", "Low", "Close"];

  headArr.forEach((head) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = head;
    row.appendChild(th);
  });

  return thead;
}
