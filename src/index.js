import {getSearchC, getSearchF} from './api';
import getWeatherPic from "./weatherPic"

// const searchBtnC = document.querySelector("#search-button-Celsius");
// const searchBtnF = document.querySelector("#search-button-Fahrenheit");
const overAllDiv = document.querySelector("#over-all-wraper");
const searchBtns = document.querySelectorAll(".input-group-text");


searchBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let inputField = document.querySelector("#inlineFormInputGroup")
		let country = inputField.value;
		let units = e.target.innerHTML;
		getWeatherPic(overAllDiv)
		if(units === "Celsius"){
			getSearchC(country);
		}else{
			getSearchF(country);
		}			

	})

}) 

getWeatherPic(overAllDiv)
