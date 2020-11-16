
/**
* GET request to the server
*
* @param {string} targetURL
*
* @return {object}
*/
function getRequest(targetURL) {
    const url = `http://localhost:3000/api/${targetURL}`;
    const result = fetch(url);
    return result.then((data) =>
        data.json().catch((error) => console.log(error))
    );
};

/**
* DELETE request to the server
*
* @param {string} targetURL
*
* @return {object}
*/
function deleteRequest(targetURL) {
    const url = `http://localhost:3000/api/${targetURL}`;
    const result = fetch(url, {
        method: "DELETE",
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return result.then((data) =>
        data.json().catch((error) => console.log(error))
    );
};

/**
* POST request to the server
*
* @param {string} targetURL
* @param {object} storeData
*
* @return {object}
*/
function postRequest(targetURL, storeData) {
    let params = JSON.stringify(storeData);
    const url = `http://localhost:3000/api/${targetURL}`;
    const result = fetch(url, {
        method: "POST",
        body: params,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
	return result.then((data) => data.json()).catch((error) => console.log(error));
};

export { postRequest, deleteRequest, getRequest };
