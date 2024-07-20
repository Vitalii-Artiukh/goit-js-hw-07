const allCategories = document.querySelector("#categories");
const itemCategories = document.querySelectorAll(".item");

console.dir(`Number of categories: ${allCategories.children.length}`);

itemCategories.forEach((element) => {
  console.dir(`Category: ${element.children[0].textContent}`);
  console.dir(`Elements: ${element.children[1].children.length}`);
});
