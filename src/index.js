import getSearch from './api';

const searchBtn = document.querySelector("#search-button");
const overAllDiv = document.querySelector("#over-all-wraper");

searchBtn.addEventListener("click", () => {
	let inputField = document.querySelector("#inlineFormInputGroup")
	let country = inputField.value;
	getSearch(country)

	
})