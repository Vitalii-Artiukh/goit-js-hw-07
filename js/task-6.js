const inputNumber = document.querySelector("input");
const btn = document.querySelectorAll("button");
const btnCreate = btn[0];
const btnDestroy = btn[1];
btnCreate.className = "create";
btnDestroy.className = "destroy";
const divBox = document.querySelector("#boxes");
let numberValue = 0;
let newDivArray = [];

function addValue() {
  numberValue = inputNumber.value;
}

function destroy() {
  divBox.innerHTML = "";
  numberValue = 0;
}

function getRandomHexColor() {
  let widthDiv = 30;
  divBox.innerHTML = "";

  if (numberValue > 0 && numberValue <= 100) {
    for (let i = 1; i <= numberValue; i++) {
      const colorNames = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
      newDivArray.push(
        `<div class="newOld" style="height:${widthDiv}px;width:${widthDiv}px;background-color:${colorNames}"></div>`
      );
      widthDiv += 10;
    }
    const newDivString = newDivArray.join("");
    divBox.insertAdjacentHTML("beforeend", newDivString);
    newDivArray = [];
  }
  inputNumber.value = "";
}

btnCreate.addEventListener("click", getRandomHexColor);
inputNumber.addEventListener("blur", addValue);
btnDestroy.addEventListener("click", destroy);
