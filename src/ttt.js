let boxes = document.querySelectorAll(".box");
let resetBtn1 = document.querySelector("#reset-btn-1");
let resetBtn2 = document.querySelector("#reset-btn-2");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // playerX (X), playerO (O)

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turn0 ? "O" : "X";
      turn0 = !turn0;
      box.disabled = true;
      checkWinner();
    }
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const pos1val = boxes[a].innerText;
    const pos2val = boxes[b].innerText;
    const pos3val = boxes[c].innerText;

    if (pos1val && pos1val === pos2val && pos1val === pos3val) {
      showWinner(pos1val);
      return;
    }
  }

  // Check for a draw
  if (Array.from(boxes).every((box) => box.innerText !== "")) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
  }
};

resetBtn1.addEventListener("click", resetGame);
resetBtn2.addEventListener("click", resetGame);
