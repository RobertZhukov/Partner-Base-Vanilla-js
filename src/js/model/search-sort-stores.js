import createTableRow from "../view/create-table-row.js";

/**
* Sort Table By Name ASC 
*/
function sortTableByNameASC(productsListCopy, targetColumn) {
	productsListCopy.sort(function(a, b) {
		let nameA = String(a[targetColumn]).toLowerCase();
		let nameB = String(b[targetColumn]).toLowerCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return; 
	});

	document.querySelector(".table-rows").innerHTML = "";

	updateTableRow(productsListCopy);
};

/**
* Sort Table By Name DESC
*
* @param {object} productsListCopy
* @param {object} targetColumn 
*/
function sortTableByNameDESC(productsListCopy, targetColumn) {
	targetColumn = targetColumn.toString();
	productsListCopy.sort(function(a, b) {
		let nameA = String(a[targetColumn]).toLowerCase();
		let nameB = String(b[targetColumn]).toLowerCase();
		
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return; 
	}).reverse();

	document.querySelector(".table-rows").innerHTML = "";
	
	updateTableRow(productsListCopy);
};

/**
* Search Stores
*/
function searchStores() {
    let value = document.querySelector(".search-stores").value;
    let storesItems = document.querySelectorAll(".list-all li");

    if (value !== "") {
        storesItems.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(value.toLowerCase()) == -1) {
                elem.classList.add("hide");
            } else {
                elem.classList.remove("hide");
            }
        });
    } else {
        storesItems.forEach(function (elem) {
            elem.classList.remove("hide");
        });
    }
};

/**
* Search Products
*/
function searchProducts() {
    let value = document.querySelector(".input-search").value;
    let storesItems = document.querySelectorAll(".table-rows tr");

    if (value !== "") {
        storesItems.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(value.toLowerCase()) == -1) {
                elem.classList.add("hide");
            } else {
                elem.classList.remove("hide");
            }
        });
    } else {
        storesItems.forEach(function (elem) {
            elem.classList.remove("hide");
        });
    }
};

/**
* Update Table Row
*/
function updateTableRow(productsListCopy, key) {
	//console.log(`UTROW: ${productsListCopy}`)
	productsListCopy.forEach(product => {
		//console.log(`PRODUCT: ${product}`)
		createTableRow(product, key)
	})	
};

export { searchStores, searchProducts, sortTableByNameASC, sortTableByNameDESC, updateTableRow };
