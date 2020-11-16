import createStoresDetails from "../controller/create-stores-details.js";

/**
* Createing details about store
*/
export default function showStoreInfo (li) {
	document.querySelector("div.preview").style.display = "none";
	document.querySelector(".contacts-stores").innerHTML = "";
	document.querySelectorAll("li.list-item").forEach((el) => {
		if (el.classList.contains("choice-store")) {
			el.classList.remove("choice-store")
		}
	});

	if (!li.classList.contains("choice-store")) {
		li.classList.add("choice-store");
	}
	
	createStoresDetails(li);
};
