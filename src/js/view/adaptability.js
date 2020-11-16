/**
* Opens the menu in the mobile version
*/
function openMenu () {
	document.querySelector(".fa-times").style.display = "block";
	document.querySelector(".fa-bars").style.display = "none";

	document.querySelector(".main").id = "burger";
	document.querySelector(".stores-list").id = "burger-stores-list";
};

/**
* Close the menu in the mobile version
*/
function closeMenu () {
	document.querySelector(".fa-times").style.display = "none";
	document.querySelector(".fa-bars").style.display = "block";

	document.querySelector(".main").removeAttribute("id");
	document.querySelector(".stores-list").removeAttribute("id");
};

export { openMenu, closeMenu };