const menu = document.querySelector("nav");
const burgerBtn = document.querySelector(".hamburger");
const header = document.querySelector("header");

const shadowHeader = () => {
	const scroll = window.scrollY;

	scroll > 0
		? header.classList.add("active")
		: header.classList.remove("active");
};

const showMenu = () => {
	menu.classList.toggle("active");
	burgerBtn.classList.toggle("is-active");
};

burgerBtn.addEventListener("click", showMenu);
window.addEventListener("scroll", shadowHeader);
