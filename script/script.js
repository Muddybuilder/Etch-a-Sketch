const container = document.querySelector(".container");

function createGrid(gridSize) {
  for (let row = 0; row < gridSize; row++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row-grid");
    for (let column = 0; column < gridSize; column++) {
      let grid = document.createElement("div");
      grid.classList.add("grid");
      rowDiv.appendChild(grid);
    }
    container.appendChild(rowDiv);
  }
}
createGrid(16);

const btn = document.querySelector(".reset");
btn.addEventListener("click", (e) => getNewGrid(e));

function getNewGrid(event) {
  // ask user
  let userInput = prompt("Enter the new grid size (1-100):");
  if (userInput == "") {
    alert("Wrong input type, try again!");
  }
  if (isNaN(userInput)) {
    alert("Wrong input type, try again!");
    return;
  }
  userInput = parseInt(userInput);
  if (userInput > 100 || userInput < 1) {
    alert("Invalid grid size, try again!");
    return;
  }

  clearGrid();
  createGrid(userInput);
}

function clearGrid() {
  container.replaceChildren();
}
