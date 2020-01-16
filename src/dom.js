

const createWeatherInfoDiv = (feels_like, humidity, pressure, temp, icon, city) => {
	let resultBoard = document.querySelector("#result-board");

	let content = `<div class="card text-center">
		<div class="h4 border-bottom p-2">City: ${city}</div>
		<div class="d-flex justify-content-between">
			<p class="bg-primary pl-5">ysdfadfasf</p>
			<p class="bg-primary pr-5">sadfasdfaasdf</p>
		</div>
		<img class="card-img-top" alt="Card image cap">
		<div class="card-body">
			<h4 class="card-title">Card title</h4>
			<p class="card-text">dfgsdfgsdadsfadfasd</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>`
	resultBoard.innerHTML = content;

}

export default createWeatherInfoDiv;