import getSearchC, { getSearchF } from './api';
import getWeatherPic from './weatherPic';

const overAllDiv = document.querySelector('#over-all-wraper');
const searchBtns = document.querySelectorAll('.input-group-text');

searchBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const inputField = document.querySelector('#inlineFormInputGroup')
		const country = inputField.value;
		const units = e.target.innerHTML;
		getWeatherPic(overAllDiv)
		if (units === 'Celsius'){
			getSearchC(country);
		} else {
			getSearchF(country);
		}			
	})
}) 

getWeatherPic(overAllDiv);
