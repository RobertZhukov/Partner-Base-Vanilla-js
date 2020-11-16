import createTableStore from "../view/create-table-store.js";
import { getRequest } from "../model/server-data.js";
import createStateProducts from "./create-state-products.js";
import createStoresContacts from "../view/create-stores-contacts.js";
import createFooter from "../view/create-footer.js";
import { anchorSearchRight, showSearchRight, hideSearchRight } from "../view/buttons-hide-show.js";


/**
* Createing details about store
*/
export default function createStoresDetails(li) {
	const id = Number(li.getAttribute("id"));
	const key = Number(li.getAttribute("key"));

	createStoresContacts(key, id);
	createStateProducts(id);
	createTableStore(id);
	createFooter();
	
    document.querySelector(".hide-right-search").onclick = hideSearchRight;
    document.querySelector(".show-right-search").onclick = showSearchRight;
    document.querySelector(".anchor-right-search").onclick = anchorSearchRight;
};
