import formatDate from "../model/format-date.js";
import Stores from "../data.js";
import { STORES } from "../controller/app.js"

/**
* Creating a store contact block
*/
export default function createStoresContacts(key, id) {
	const email = STORES[key].Email;
    const phoneNumber = STORES[key].PhoneNumber;
    const address = STORES[key].Address;
	const floorArea = STORES[key].FloorArea;
	
    const storeDetails = document.createElement("div");
	storeDetails.id = "stores-info";
	storeDetails.setAttribute("storeId", id);
	storeDetails.setAttribute("storeKey", key);

    const innerContacts = `
		<div class="contacts-title">
			<h2>Store Details</h2>
		</div>
		<div class="header">
			<div class="contact-block">
				<div class="contact-item">
					<div class="contact-bold">
						<p>Email:</p>
					</div>
					<div>
						<p>${email}</p>
					</div>
				</div>
				<div class="contact-item">
					<div class="contact-bold">
						<p>Phone number:</p>
					</div>
					<div>
						<p>+${phoneNumber}</p>
					</div>
				</div>
				<div class="contact-item">
					<div class="contact-bold">
						<p>Address:</p>
					</div>
					<div>
						<p>${address}</p>
					</div>
				</div>
			</div>
			<div class="contact-block">
				<div class="contact-item">
					<div class="contact-bold">
						<p>Established Date:</p>
					</div>
					<div>
						<p>${formatDate(STORES, key)}</p>
					</div>
				</div>
				<div class="contact-item">
					<div class="contact-bold">
						<p>Floor Area:</p>
					</div>
					<div>
						<p>${floorArea}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="anchor-search-right">
			<button class="hide-right-search">
				<i class="fas fa-chevron-up"></i>
			</button>
			<button class="anchor-right-search">
				<i class="fas fa-paperclip"></i>
			</button>
		</div>
		<div class="show-search-right">
			<button class="show-right-search">
				<i class="fas fa-chevron-down"></i>
			</button>
		</div>`;

    storeDetails.innerHTML = innerContacts;
	document.querySelector(".contacts-stores").appendChild(storeDetails);
};

