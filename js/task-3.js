const inputName = document.querySelector("#name-input");
const welcomeName = document.querySelector("#name-output");

inputName.addEventListener("input", (set) => {
  if (set.currentTarget.value.trim() === "") {
    return (welcomeName.textContent = "Anonymous");
  }
  welcomeName.textContent = set.currentTarget.value.trim();
});
