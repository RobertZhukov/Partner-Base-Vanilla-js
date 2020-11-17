import { 
	updateTableStateOK, 
	updateTableStateSTORAGE, 
	updateTableStateOUT_OF_STOCK, 
	updateTableStateALL 
} from "../model/update-table-state.js";
import Stores from "../data.js";
import { STORES } from "./app.js"

/**
* Create state products block
*/
export default function createStateProducts(id, key) {
	//debugger
    const allProducts = STORES[key].rel_Products.length;
    const stateProducts = document.createElement("div");
    let stateOk = 0;
    let stateStorage = 0;
    let stateOutOfStock = 0;

	//debugger

	STORES[key].rel_Products.forEach(product => {
		let element = product.Status;

        switch (element) {
            case "OK":
                stateOk++;
                break;
            case "STORAGE":
                stateStorage++;
                break;
            case "OUT_OF_STOCK":
                stateOutOfStock++;
                break;
            default:
                break;
        }
	});

    const innerStateProducts = `
		<div class="state-products">
			<div class="all">
				<div class="all-number">
					<p>${allProducts}</p>
				</div>
				<div class="all-text">
					<p>All</p>
				</div>
				<div>
					<p class="line"></p>
				</div>
			</div>
			<div class="more">
				<div>
					<i class="far fa-check-circle"></i>
					<p>Ok</p>
					<span>${stateOk}</span>
				</div>
				<div>
					<i class="fas fa-exclamation-triangle"></i>
					<p>Storage</p>
					<span>${stateStorage}</span>
				</div>
				<div>
					<i class="fas fa-exclamation-circle"></i>
					<p>Out of stock</p>
					<span>${stateOutOfStock}</span>
				</div>
			</div>
		</div>
		<div id="table-rows"></div>`;

    stateProducts.innerHTML = innerStateProducts;
	document.querySelector("#stores-info").appendChild(stateProducts);
	
	document.querySelector(".fa-check-circle").addEventListener("click", () => {
		updateTableStateOK(key, STORES[key].rel_Products);
	});

	document.querySelector(".fa-exclamation-triangle").addEventListener("click", () => {
		updateTableStateSTORAGE(key, STORES[key].rel_Products);
	});

	document.querySelector(".fa-exclamation-circle").addEventListener("click", () => {
		updateTableStateOUT_OF_STOCK(key, STORES[key].rel_Products);
	});

	document.querySelector(".all").addEventListener("click", () => {
		 updateTableStateALL(key, STORES[key].rel_Products);
	});
};


