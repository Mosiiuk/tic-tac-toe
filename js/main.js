const main = document.getElementById("main");
// const header = document.getElementById("header");
// const gameSide = document.getElementById("gameSide");
// const field = document.getElementById("field");

let side1 = "X";
let side2 = "O";
let side = side1;

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function createElement(tag, classes) {
  const el = document.createElement(tag);
  if (classes != null) el.classList.add(classes);
  return el;
}

function addValue(side, event) {
  const element = event.target;
  const coords = [element.dataset.x, element.dataset.y];
  arr[coords[1]][coords[0]] = side;
  if (side == arr[0][0] && side == arr[0][1] && side == arr[0][2]) {
    winner();
  } else if (side == arr[1][0] && side == arr[1][1] && side == arr[1][2]) {
    winner();
  } else if (side == arr[2][0] && side == arr[2][1] && side == arr[2][2]) {
    winner();
  } else if (side == arr[0][0] && side == arr[1][0] && side == arr[2][0]) {
    winner();
  } else if (side == arr[0][1] && side == arr[1][1] && side == arr[2][1]) {
    winner();
  } else if (side == arr[0][2] && side == arr[1][2] && side == arr[2][2]) {
    winner();
  } else if (side == arr[0][0] && side == arr[1][1] && side == arr[2][2]) {
    winner();
  } else if (side == arr[2][0] && side == arr[1][1] && side == arr[0][2]) {
    winner();
  }
}

function addSide(event) {
  const cellTarget = event.target;
  if (cellTarget.innerHTML == "") {
    addValue(side, event);
    cellTarget.innerHTML = side;
    if (side == side1) {
      side = side2;
    } else {
      side = side1;
    }
  }
  const userSide = document.querySelector(".side");
  userSide.innerHTML = side;
}

function winner() {
  const winn = createElement("div", "winn");
  main.appendChild(winn);
  const text = createElement("div", "textWinn");
  text.innerHTML = `Congratulations, the player who played ${side} won`;
  winn.appendChild(text);
  const button = createElement("button", "buttonRestart");
  button.innerHTML = "Restart";
  button.addEventListener("click", game);
  winn.appendChild(button);
}

function creatField() {
  let y = 0;
  for (let i = 0; i < 3; i++) {
    let x = 0;
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

function game() {
  main.innerHTML = "";
  arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const header = createElement("div", "header");
  main.appendChild(header);
  const title = createElement("h1", "title");
  title.innerHTML = "tic-tac-toe";
  header.appendChild(title);
  const userSide = createElement("div", "side");
  userSide.innerHTML = side;
  header.appendChild(userSide);
  creatField();

  const restart = createElement("button", "buttonRestart");
  restart.innerHTML = "restart";
  main.appendChild(restart);
}

game();
