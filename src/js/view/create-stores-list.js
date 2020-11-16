import Stores from "../data.js"

/**
* Create stores list
*/
export default function createStoresList() {
    for (let i = 0; i < Stores.length; i++) {
        const ul = document.createElement("ul");
		const li = document.createElement("li");
		const idStore = Stores[i].id
        const name = Stores[i].Name;
        const address = Stores[i].Address;
        const floorArea = Stores[i].FloorArea;

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
