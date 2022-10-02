const main = document.getElementById("main");
const header = document.getElementById("header");
const buttonsContainer = document.getElementById("buttonsContainer");
const field = document.getElementById("field");

let side = "X";

function createElement(tag, classes) {
  const el = document.createElement(tag);
  if (classes != null) el.classList.add(classes);
  return el;
}

function createBtn(choice) {
  const btn = createElement("button", "side");
  //
  btn.addEventListener("click", () => {
    side = choice;
  });

  btn.innerHTML = choice;
  buttonsContainer.appendChild(btn);
}

function addSide(event) {
  const cellTarget = event.target;

  cellTarget.innerHTML = side;
}

function creatField() {
  let y = 1;
  for (let i = 0; i < 3; i++) {
    let x = 1;
    const row = createElement("div", "row");
    for (let k = 0; k < 3; k++) {
      const cell = createElement("div", "cell");
      cell.setAttribute("data-x", x);
      cell.setAttribute("data-y", y);
      cell.addEventListener("click", addSide);
      row.appendChild(cell);
      x++;
    }
    y++;
    main.appendChild(row);
  }
}

function mainMenu() {
  const title = createElement("h1", "title");
  title.innerHTML = "tic-tac-toe";
  header.appendChild(title);

  createBtn("X");
  createBtn("O");
}

mainMenu();
creatField();
