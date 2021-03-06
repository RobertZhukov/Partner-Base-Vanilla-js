import { postRequest } from "./server-data.js";
import { popUpStatus } from "../utility/utility.js";
import { deleteRequest} from "./server-data.js";
import createStoresList from "../view/create-stores-list.js";
import Stores from "../data.js";
import { STORES } from "../controller/app.js"

/**
* Close a modal form for creating a store
*/
function openCreateStore() {
	document.querySelector(".modal-store-background").classList.add("show-modal");
};

/**
* Opens a modal form for creating a store
*/
function closeCreateStore() {
	document.querySelector(".modal-store-background").classList.remove("show-modal");
};

/**
* Create a new store on click
*/
function sendNewStore() {
	let username = document.querySelector(".username").value;
	let email = document.querySelector(".email").value;
	let phone = document.querySelector(".phone").value;
	let address = document.querySelector(".address").value;
	let date = document.querySelector(".date").value;
	let area = document.querySelector(".area").value;
	let storeData = {
		"Name": username,
		"Email": email,
		"PhoneNumber": phone,
		"Address": address,
		"Established": date,
		"FloorArea": area,
		"id": STORES.length + 1,
		"rel_Products": []
	};

	if (username && email && phone && address && date && area) {

		STORES.unshift(storeData);
		localStorage["Stores"] = JSON.stringify(STORES)
		
		document.querySelector(".modal-store-background").classList.remove("show-modal");
		popUpStatus("The product has been created!")
	} else {
		popUpStatus("Enter all data correctly!")
	}
};

/**
* Create button click handler in block "Product"
*/
function openCreateProduct() {
	document.querySelector(".modal-product-background").classList.add("show-modal");
};

/**
* Opens a modal form for creating a product
*/
function closeCreateProduct() {
	document.querySelector(".modal-product-background").classList.remove("show-modal");
};

/**
* Create a new store on click
*/
function sendNewProduct() {
	let username = document.querySelector(".username-product").value;
	let prise = document.querySelector(".prise-product").value;
	let specs = document.querySelector(".specs-product").value;
	let rating = document.querySelector(".rating-product").value;
	let supplierInfo = document.querySelector(".supplier-info-product").value;
	let madeIn = document.querySelector(".made-in-product").value;
	let companyName = document.querySelector(".company-name-product").value;
	let status = document.querySelector(".status-product").value;
	let storeId = document.querySelector(".choice-store").getAttribute("key");
	let productData = {
		"Name": username,
		"Price": prise,
		"Photo": "https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg",
		"Specs": specs,
		"Rating": rating,
		"SupplierInfo": supplierInfo,
		"MadeIn": madeIn,
		"ProductionCompanyName": companyName,
		"Status": status,
		"id":  Math.floor(Math.random()*100) + 50,
	};

	if (username && prise && specs && rating &&
		supplierInfo && madeIn && companyName && 
		status && storeId) {
		
		STORES[storeId].rel_Products.unshift(productData);
		localStorage["Stores"] = JSON.stringify(STORES)

		document.querySelector(".modal-product-background").classList.remove("show-modal");
		popUpStatus("The product has been created!")
	} else {
		popUpStatus("Enter all data correctly!")
	}
};

/**
* Delete store on Click
*/
function deleteStore() {
	if (document.querySelector("#stores-info")) {
		const confirmation = confirm("Are you sure you want to delete the store?")
		if (confirmation) {
			let selectStoreId = document.querySelector("#stores-info").getAttribute("storeKey");
			
			STORES.splice(selectStoreId, 1)
			localStorage["Stores"] = JSON.stringify(STORES);

			location.reload();
		}
	} else {
		  popUpStatus(`Select the store you want to delete :)`)
	}
};

export { openCreateStore, closeCreateStore, sendNewStore, openCreateProduct, closeCreateProduct, sendNewProduct, deleteStore };