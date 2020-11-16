import createTableStore from "../view/create-table-store.js";
import { clearAllChoiseStatus } from "../utility/utility.js";

/**
* Update state of elements OK
*/
function updateTableStateOK(id, productsList) {
	document.querySelector("#table-rows").innerHTML = "";
	const filterList = productsList.filter(el => el.Status === "OK");
	createTableStore(id, filterList);
	clearAllChoiseStatus();
	document.querySelector(".fa-check-circle").classList.add("choice-status");
};

/**
* Update state of elements STORAGE
*/
function updateTableStateSTORAGE(id, productsList) {
	document.querySelector("#table-rows").innerHTML = "";
	const filterList = productsList.filter(el => el.Status === "STORAGE");
	createTableStore(id, filterList);
	clearAllChoiseStatus();
	document.querySelector(".fa-exclamation-triangle").classList.add("choice-status");
};

/**
* Update state of elements OUT_OF_STOCK
*/
function updateTableStateOUT_OF_STOCK(id, productsList) {
	document.querySelector("#table-rows").innerHTML = "";
	const filterList = productsList.filter(el => el.Status === "OUT_OF_STOCK");
	createTableStore(id, filterList);
	clearAllChoiseStatus();
	document.querySelector(".fa-exclamation-circle").classList.add("choice-status");
};

/**
* Update state of elements ALL
*/
function updateTableStateALL(productsList) {
	document.querySelector("#table-rows").innerHTML = "";
	createTableStore(productsList);
	clearAllChoiseStatus();
	document.querySelector(".all").classList.add("choice-status")
};

export { updateTableStateOK, updateTableStateSTORAGE, updateTableStateOUT_OF_STOCK, updateTableStateALL };