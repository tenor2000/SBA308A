function createTestAction(functionCall, name) {
  const navDropdown = document.getElementById("dropdown");
  navDropdown.id = "booger";
  const li = document.createElement("li");
  const testAction = document.createElement("a");
  testAction.href = "#";
  testAction.classList = "dropdown-item";
  testAction.textContent = name;
  testAction.addEventListener("click", functionCall);

  li.appendChild(testAction);
  navDropdown.appendChild(li);
}

export default createTestAction;
