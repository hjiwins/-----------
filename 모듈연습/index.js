const menuBox = document.querySelector(".nav-list");
const mainMenu = document.querySelector(".main-menu");
const subMenu = document.querySelector(".sub-menu");
const subMenuText = document.querySelectorAll(".sub-menu ul");

mainMenu.addEventListener("mouseover", () => {
  subMenu.classList.remove("slide-up");
  subMenu.classList.toggle("slide-down");
});

menuBox.addEventListener("mouseleave", () => {
  subMenu.classList.remove("slide-down");
  subMenu.classList.toggle("slide-up");
});
