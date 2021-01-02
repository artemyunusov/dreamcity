// console.log(2);

const headerMenu = document.querySelector(".header__menu");
const menuClose = document.querySelector(".menu__close");

const menu = document.querySelector(".menu");

headerMenu.addEventListener("click", () => {
  menu.classList.add("transform");
})

menuClose.addEventListener("click", () => {
  menu.classList.remove("transform");
})