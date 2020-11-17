import Stores from "../data.js"
import { STORES } from "../controller/app.js"

/**
* Create stores list
*/
export default function createStoresList() {
    for (let i = 0; i < STORES.length; i++) {
        const ul = document.createElement("ul");
		const li = document.createElement("li");
		const idStore = STORES[i].id;
        const name = STORES[i].Name;
        const address = STORES[i].Address;
        const floorArea = STORES[i].FloorArea;

        ul.className = "list-all";
        li.className = "list-item";
		li.setAttribute("id", idStore);
		li.setAttribute("key", i);

        let innerStores = `
			<div>
				<h3>${name}</h3>
				<p class="description">
					${address}
				</p>
			</div>
			<div class="item-price">
				<p class="number-sq-m">${floorArea}</p>
				<p class="sq-m">sq.m</p>
			</div>`;

        li.innerHTML = innerStores;
        document.querySelector(".list-all").appendChild(li);
    }
};
