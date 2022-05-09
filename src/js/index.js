const menuIcon = document.querySelector(".nav__menu-icon");
const navMenu = document.querySelector(".nav__menu-container");
const navContainer = document.querySelector(".nav");
const width = document.body.getBoundingClientRect().width;

document.body.style.overflowX = "hidden";
menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.toggle("nav__open");
  navMenu.classList.toggle("menu-open");
});
