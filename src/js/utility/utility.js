import { deleteRequest } from "../model/server-data.js";

/* *
* Check if there are products and display a notification if not
*/
function checkProduct() {
	const noProducts = document.createElement("div");
	noProducts.className = "no-products";
		
	const innerNoProducts = `
		<i class="fab fa-ups"></i>
		<p> 
			There are no products in this store, but you can create them 
		</p>`;

	noProducts.innerHTML = innerNoProducts;
	document.querySelector("#table-rows").appendChild(noProducts);
};

/**
* Clear all choise status
*/
function clearAllChoiseStatus() {
	document.querySelector(".fa-check-circle").classList.remove("choice-status");
	document.querySelector(".fa-exclamation-triangle").classList.remove("choice-status");
	document.querySelector(".fa-exclamation-circle").classList.remove("choice-status");
	document.querySelector(".all").classList.remove("choice-status");
}; 

/**
* Pop-up window reporting the status of the operation
*
* @param {string} TextMessage
*/
function popUpStatus(TextMessage) {
	const div = document.createElement("div");
		
	const innerpopUp = `
		<p> 
			${TextMessage}
		</p>`;

	div.innerHTML = innerpopUp;
	document.querySelector(".pop-up-status").appendChild(div);

	document.querySelector(".pop-up-status").style.display = "block";
	setTimeout(hidePopUP, 3000);

	/**
	* Hide status of the operation
	*/
	function hidePopUP() {
		document.querySelector(".pop-up-status").innerHTML = "";
		document.querySelector(".pop-up-status").style.display = "none"
	}
};

export { checkProduct, clearAllChoiseStatus, popUpStatus };