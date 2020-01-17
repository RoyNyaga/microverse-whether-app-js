/* eslint-disable no-tabs, indent */

const createWeatherInfoDivC = (feelsLike, humidity, pressure, temp, icon, city, max, min) => {
	const today = new Date();
	const dd = today.getUTCDate();
	const mm = today.getUTCMonth() + 1;
	const yyyy = today.getUTCFullYear();

	const h = today.getUTCHours();
	const m = today.getUTCMinutes();
	const s = today.getUTCSeconds();
	const resultBoard = document.querySelector('#result-board');
	const content = `<div class='card text-center'>
		<div class='border-bottom p-2 d-flex justify-content-between'>
			<p>City: ${city}</p>
			<p><button type='button' class='btn btn-info'>C</button> <button type='button' class='btn btn-info'>K</button></p>
		</div>
		<div class='d-flex justify-content-between'>
			<div class='pl-5'>
				<p class='bg-primary'>
			 	${dd} / ${mm} / ${yyyy}
				</p>
				<p>
				${h}H : ${m}MM : ${s}S
				</p>
				<p>
					Feels like ${feelsLike} ℃
				</p>
			</div>
			<div class='pr-5'>
				<img class='card-img-top bg-dark' src='http://openweathermap.org/img/wn/${icon}@2x.png' alt='Card image cap'>
				<p class='pt-3'>${temp} ℃</p>
			</div>

		</div>
		
		<div class='card-body border-top d-flex justify-content-between'>
			<div>
				<p>humidity</p>
				<p>${humidity}%</p>
			</div>
			<div>
				<p>Pressure</p>
				<p>${pressure} KPA</p>
			</div>
			<div>
				<p>Max temp</p>
				<p>${max} ℃</p>
			</div>
			<div>
				<p>Min temp</p>
				<p>${min} ℃</p>
			</div>

		</div>
	</div>`;
	resultBoard.innerHTML = content;
};

const createWeatherInfoDivF = (feelsLike, humidity, pressure, temp, icon, city, max, min) => {
	const today = new Date();
	const dd = today.getUTCDate();
	const mm = today.getUTCMonth() + 1;
	const yyyy = today.getUTCFullYear();

	const h = today.getUTCHours();
	const m = today.getUTCMinutes();
	const s = today.getUTCSeconds();
	const resultBoard = document.querySelector('#result-board');
	const content = `<div class='card text-center'>
		<div class='border-bottom p-2 d-flex justify-content-between'>
			<p>City: ${city}</p>
		</div>
		<div class='d-flex justify-content-between'>
			<div class='pl-5'>
				<p class='bg-primary'>
			 		${dd} / ${mm} / ${yyyy}
				</p>
				<p>
					${h}H : ${m}MM : ${s}S
				</p>
				<p>
					Feels like ${feelsLike} ℉
				</p>
			</div>
			<div class='pr-5'>
				<img class='card-img-top bg-dark' src='http://openweathermap.org/img/wn/${icon}@2x.png' alt='Card image cap'>
				<p class='pt-3'>${temp} ℉</p>
			</div>

		</div>
		
		<div class='card-body border-top d-flex justify-content-between'>
			<div>
				<p>humidity</p>
				<p>${humidity}%</p>
			</div>
			<div>
				<p>Pressure</p>
				<p>${pressure} KPA</p>
			</div>
			<div>
				<p>Max temp</p>
				<p>${max} ℉</p>
			</div>
			<div>
				<p>Min temp</p>
				<p>${min} ℉</p>
			</div>

		</div>
	</div>`;
	resultBoard.innerHTML = content;
};

export { createWeatherInfoDivC, createWeatherInfoDivF };