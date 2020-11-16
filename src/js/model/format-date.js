const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
* Date formatting
*
* @param {object} storesList
* @param {number} id
*
*@return {string}
*/
export default function formatDate(storesList, id) {
	const established = new Date(storesList[id].Established);
	const month = monthNames[established.getMonth()];
	const day = established.getDate();
	const year = established.getFullYear();

	return `${month} ${day}. ${year}`	
};
