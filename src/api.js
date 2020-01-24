import dom from './dom';


const external = (() => {
  async function getSearchC(country) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ country }&units=metric&APPID=6afc4c4d6d160273a7559007309c6525`,{ mode: 'cors' });    
      const weatherData = await response.json();
      const parseData = weatherData.main;
      const icon = weatherData.weather[0].icon;
      const city = weatherData.name;
      dom.createWeatherInfoDivC(parseData.feels_like,parseData.humidity,parseData.pressure, 
        parseData.temp,icon,city,parseData.temp_max,parseData.temp_min);     
    } catch (error) {
      alert('Please Enter the Valid name of a City');
    }
  }

  async function getSearchF(country) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ country }&units=imperial&APPID=6afc4c4d6d160273a7559007309c6525`,{ mode: 'cors' });    
      const weatherData = await response.json();
      const parseData = weatherData.main;
      const icon = weatherData.weather[0].icon;
      const city = weatherData.name;
      dom.createWeatherInfoDivF(parseData.feels_like,parseData.humidity,parseData.pressure,
        parseData.temp,icon,city,parseData.temp_max,parseData.temp_min);     
    } catch (error) {
      alert("Please Enter the Valid name of a City");
    }
  }
  return { getSearchC,  getSearchF };
})();

export default external;
