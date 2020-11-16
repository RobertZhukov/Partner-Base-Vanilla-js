import { openCreateProduct, closeCreateProduct, sendNewProduct } from "../model/create-delete-components.js"

/**
* Create footer
*/
export default function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer-right";

    const innerFooter = `
		<button class="create-product">
			<i class="fas fa-plus"></i>
			Create
		</button>`;

    footer.innerHTML = innerFooter;
	document.querySelector("#stores-info").appendChild(footer);

	document.querySelector(".create-product").onclick = openCreateProduct;
	document.querySelector(".create-product-btn").onclick = sendNewProduct;
	document.querySelector(".cancel-product-btn").onclick = closeCreateProduct;
};
