import createWeatherInfoDiv from './dom';


  async function getSearch(country) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=6afc4c4d6d160273a7559007309c6525`, {mode: 'cors'});
      const weatherData = await response.json();
      const parseData = weatherData.main;
      let icon = weatherData.weather[0].icon;
      let city = weatherData.name;
      createWeatherInfoDiv(parseData.feels_like, parseData.humidity, parseData.pressure, parseData.temp, icon, city);
    }catch (error) {
   console.log(error)
  }

  }
export default getSearch;