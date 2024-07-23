const textArrea = document.querySelector('p');
// const textHello = document.querySelector("h1");
const inputName = document.querySelector('#name-input');
const welcomeName = document.querySelector('#name-output');
// const forStileDiv =
//   '<div class="wrap-forstyle"><input type="text" id="name-input" placeholder="Please enter your name" /><h1>Hello, <span id="name-output">Anonymous</span>!</h1></div>';
// inputName.remove();
// textHello.remove();

// textArrea.insertAdjacentHTML("afterend", forStileDiv);

const inputName1 = document.querySelector('#name-input');
const welcomeName1 = document.querySelector('#name-output');

inputName.addEventListener('input', set => {
  if (set.currentTarget.value.trim() === '') {
    return (welcomeName.textContent = 'Anonymous');
  }
  welcomeName1.textContent = set.currentTarget.value.trim();
});
