import { updateTableRow } from "../model/search-sort-stores.js";
import { checkProduct } from "../utility/utility.js";
import { sortTableByNameASC, sortTableByNameDESC } from "../model/search-sort-stores.js";
import Stores from "../data.js"

/**
* Creating a product tablereate table 
*/
export default function createTableStore(id, filterList) {
	
    const table = document.createElement("table");
    table.id = "create-table-products";

    const innerTitleRow = `
		<col width="15%">
		<col width="8%">
		<col width="16%">
		<col width="16%">
		<col width="12%">
		<col width="13%">
		<col width="18%">
		<tbody class="table-rows-titles">
			<tr>
				<td colspan="3" class="table-title">Products</td>
				<td colspan="4" class="table-search">
					<form action="" class="form-table-search">
						<input type="text" class="input-search" autocomplete="off" placeholder="Search.."/>
						<button class="refresh-btn-table">
							<i class="fas fa-sync-alt"></i>
						</button>
					</form>
				</td>
			</tr>
			<tr class="title-sticky">
				<th class="th-name" data-column="Name">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Name </div>
					</div>
				</th>
				<th class="th-prise align-right" data-column="Price">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Price </div>
					</div>
				</th>
				<th class="th-specs" data-column="Specs">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Specs </div>	
					</div>
				</th>
				<th class="th-supper-info" data-column="SupplierInfo">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Supperlier Info </div>		
					</div>
				</th>
				<th class="th-country" data-column="MadeIn">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Country of original </div>	
					</div>
				</th>
				<th class="th-prod-company" data-column="ProductionCompanyName">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Prod company </div>	
					</div>
				</th>
				<th class="th-raiting" data-column="Rating">
					<div class="container-button">
						<div class="sort-table"><i class="fas fa-sort-up inactive-table"></i><i class="fas fa-sort"></i><i class="fas fa-sort-down inactive-table"></i></div>
						<div> Raiting </div>
					</div>
				</th>
			</tr>
		</tbody>
		<tbody class="table-rows">

		</tbody>`;

    table.innerHTML = innerTitleRow;
	document.querySelector("#table-rows").appendChild(table);
	
	/* /* *
	* Check if there are products and display a notification if not
	*/
	//alert(id)
	if (Stores[id].rel_Products.length === 0) {
		checkProduct();
	}

	if (filterList) {
		updateTableRow(filterList);
	} else {
		updateTableRow(Stores[id].rel_Products);
	}

	/* /* *
	* Sort by columns
	*/
	let productsListCopy = Object.assign([], Stores[id].rel_Products);
	const allSortButton = document.querySelectorAll("div.sort-table");

	allSortButton.forEach(element => 
		element.addEventListener("click", function(e) {
			
			let targetTh = e.target.closest("th");
			let targetColumn = targetTh.dataset.column;

			if (targetTh.classList.contains("js-asc")) {
				sortTableByNameDESC(productsListCopy, targetColumn);
				targetTh.classList.remove("js-asc");
				targetTh.classList.add("js-desc");
				this.firstChild.classList.add("inactive-table");
				this.lastChild.classList.remove("inactive-table");
			} else if (targetTh.classList.contains("js-desc")) {
				document.querySelector(".table-rows").innerHTML = "";
				updateTableRow(Stores[id].rel_Products);
				targetTh.classList.remove("js-desc");
				this.lastChild.classList.add("inactive-table");
				this.querySelector(".fa-sort").style.display = "block";
			} else {
				sortTableByNameASC(productsListCopy, targetColumn);
				targetTh.classList.add("js-asc");
				this.firstChild.classList.remove("inactive-table");
				this.querySelector(".fa-sort").style.display = "none";
			} 
		})); 
};
