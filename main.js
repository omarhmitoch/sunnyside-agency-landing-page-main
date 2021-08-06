const ul = document.querySelector(".menu ul");
const svg = document.querySelector(".menu a svg");
document.querySelector("#dropDown").addEventListener("click", (e) => {
  e.preventDefault();
  ul.classList.toggle("active");
  svg.classList.toggle("active");
});
