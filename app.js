const sizeBtn = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const container = document.querySelector("#container");

window.onload = gridLayout(16);

function colorShift() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function clear() {
  const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
    container.removeChild(element);
  })
}

function gridLayout(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridBlock = document.createElement("div");
    container.appendChild(gridBlock);
    gridBlock.classList.add("blocks");
    gridBlock.addEventListener("mouseover", colorShift);
  }
}

function colorChoice() {
  let userInput = prompt("Please choose a number between 1 and 64");
  if (userInput !== null) {
    userNum = parseInt(userInput);
    if (userNum < 1 || userNum > 64 || Number.isNaN(userNum)) {
      alert("Please entere a number between 1 and 65");
      reset();
    } else {
      clear();
      gridLayout(userNum);
    }
  }
}

function reset() {
  clear();
  gridLayout(16);
}

sizeBtn.addEventListener('click', () => colorChoice());
resetBtn.addEventListener('click', () => reset());