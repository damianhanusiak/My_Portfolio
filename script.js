const menu = document.querySelector("nav");
const burgerBtn = document.querySelector(".hamburger");
const header = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-link");

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

const switchToSection = e => {
	const key = e.target.dataset.key;

	const section =
		document.querySelector(`.${key}`).getBoundingClientRect().top +
		window.pageYOffset -
		135;

	menu.classList.remove("active");
	burgerBtn.classList.remove("is-active");

	window.scrollTo({ top: section, behavior: "smooth" });
};

burgerBtn.addEventListener("click", showMenu);
window.addEventListener("scroll", shadowHeader);
navItems.forEach(item => item.addEventListener("click", switchToSection));
