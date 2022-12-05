const menu = document.querySelector("nav");
const burgerBtn = document.querySelector(".hamburger");

burgerBtn.addEventListener("click", () => {
	menu.classList.toggle("active");
	burgerBtn.classList.toggle("is-active");
});
