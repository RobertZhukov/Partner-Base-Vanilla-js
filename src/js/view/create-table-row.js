import { deleteRequest } from "../model/server-data.js";
import { searchProducts } from "../model/search-sort-stores.js";

/**
* Createing table rows
*
* @param {object} product
*/
export default function createTableRow(product) {

	const tableRow = document.createElement("tr");
	const name = product["Name"];
	const id = product["id"];
	const price = product["Price"];
	const specs = product["Specs"];
	const supplierInfo = product["SupplierInfo"];
	const madeIn = product["MadeIn"];
	const productionCompanyName = product["ProductionCompanyName"];
	const rating = product["Rating"];
	tableRow.setAttribute("productId", id);

	let goldStar = "";
	let grayStar = "";

    for (let i = 0; i < rating; i++) {
        goldStar += "<span class=\"active\"></span>";
    }

    for (let i = 0; i < 5 - rating; i++) {
        grayStar += "<span></span>";
    }

    const innerRow = `
		<td>
			<div class="name-index">${name}</div>
			<div>${id}</div>
		</td>
		<td class="align-right">
			<div class="product-number">${price}</div>
			<div class="product-unit">usd</div>
		</td>
		<td>		
			<div class="hide-text" title="${specs}">
				${specs}
			</div>					
		</td>
		<td>
			<div class="hide-text" title="${supplierInfo}">
				${supplierInfo}
			</div>
		</td>
		<td>${madeIn}</td>
		<td>${productionCompanyName}</td>
		<td>
			<div class="rating-arrow">
				<div class="rating">
				${goldStar}${grayStar}
				</div>
				<div>
					<i class="fas fa-backspace"></i>
				</div>
				<div>
					<i class="fas fa-chevron-right"></i>
				</div>
			</div>
		</td>`;

	tableRow.innerHTML = innerRow;
	document.querySelector(".table-rows").appendChild(tableRow);
	document.querySelector(".input-search").oninput = searchProducts;

	document.querySelectorAll("i.fa-backspace").forEach((i) => {
		i.addEventListener("click", function (e) {
			const confirmation = confirm("Are you sure you want to delete the store?")
			
			if (confirmation) {
				let targetThID = e.target.closest("tr");
				let rowDeleteID = targetThID.getAttribute("productId");
				
				deleteRequest(`Products/${rowDeleteID}`);
			}
		});
	});	
};

