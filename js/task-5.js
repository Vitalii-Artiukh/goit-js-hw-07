const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');
const btnLst = document.querySelector('.change-color');

function newColorRandom() {
  const colorName = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  spanColor.textContent = colorName;
  bodyEl.style.backgroundColor = colorName;
}

btnLst.addEventListener('click', newColorRandom);
