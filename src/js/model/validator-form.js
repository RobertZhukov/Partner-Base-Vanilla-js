/**
* Checking for required
*
* @param {object} inputElement DOM element
*/
function checkingForRequired(inputElement) {
	if (inputElement.value === "") {
		inputElement.classList.add("invalid");
		inputElement.nextElementSibling.style.display = "block";
	} else {
		inputElement.classList.remove("invalid");
		inputElement.nextElementSibling.style.display = "none";
	}
};

/**
* Checking valid email
*
* @param {object} inputElement DOM element
*
* @return {boolean}
*/
function checkingValidEmail(inputElement) {
	let regEx = /.+@.+\..+/i;
	if (inputElement.value !== "" && !regEx.test(inputElement.value)) {
		inputElement.classList.add("invalid");
		inputElement.nextElementSibling.innerHTML= "not the right email";
		inputElement.nextElementSibling.style.display = "block";
		return false
	}
};

/**
* Checking max rating
*
* @param {object} inputElement DOM element
*/
function checkingMaxRating(inputElement) {
	if (Number(inputElement.value) > 5 || Number(inputElement.value) < 1) {
		inputElement.value = "";
		inputElement.classList.add("invalid");
		inputElement.style.border = "2px solid orange";
		inputElement.nextElementSibling.innerHTML= " input number 1 .. 5";
		inputElement.nextElementSibling.style.display = "block";
		inputElement.nextElementSibling.style.color = "orange";
	} else {
		inputElement.style.border = "1px solid red";
	}
};

/**
* Check for digits only
*
* @param {object} inputElement DOM element
*/
function checkingOnlyNumbers(inputElement) {
	if (Number(inputElement.value) !== inputElement.value) {
		inputElement.value = inputElement.value.slice(0, inputElement.value.length - 1);
	}
};

export { checkingForRequired, checkingValidEmail, checkingMaxRating, checkingOnlyNumbers, checkRaiting };
