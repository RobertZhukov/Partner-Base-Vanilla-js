//"use strict";
import createStoresList from "../view/create-stores-list.js";
import { searchStores } from "../model/search-sort-stores.js";
import { openCreateStore, closeCreateStore, sendNewStore, deleteStore } from "../model/create-delete-components.js";
import { anchorSearch, showSearch, hideSearch } from "../view/buttons-hide-show.js";
import { openMenu, closeMenu } from "../view/adaptability.js";
import showStoreInfo from "../view/show-store-info.js";
import Stores from "../data.js";

//debugger
	if (localStorage["Stores"]) {
		var STORES = JSON.parse(localStorage["Stores"]);
	} else {
		var STORES = Stores;
	}
//debugger
/**
* Create Stores List 
*/
createStoresList();
			
const allStoresItem = document.querySelectorAll("li.list-item");
allStoresItem.forEach((li) => {
	li.addEventListener("click", () => showStoreInfo(li));
});

/**
* Delete Stores 
*/
document.querySelector(".delete-store").onclick = deleteStore; 

/**
* Search for shops when entering data
*/
document.querySelector(".search-stores").oninput = searchStores;

/**
* Click handler for hide/show/anchor buttons
*/
document.querySelector(".hide-search").onclick = hideSearch;
document.querySelector(".show-search").onclick = showSearch;
document.querySelector(".anchor-search").onclick = anchorSearch;

/**
* Create button click handler in block "Stores"
*/
document.querySelector(".create-store").onclick = openCreateStore;
document.querySelector(".cancel-store-btn").onclick = closeCreateStore;
const addStoreForm = document.querySelector("#create-store");
addStoreForm.addEventListener("submit", sendNewStore);

/**
* Open menu in mobile version
*/
document.querySelector(".fa-bars").addEventListener("click", openMenu);

/**
* Close menu in mobile version
*/
document.querySelector(".fa-times").addEventListener("click", closeMenu);

export { STORES };