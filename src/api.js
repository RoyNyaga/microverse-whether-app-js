import { createWeatherInfoDivC, createWeatherInfoDivF } from './dom';


  async function getSearchC(country) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=6afc4c4d6d160273a7559007309c6525`, {mode: 'cors'});    
      const weatherData = await response.json();
      const parseData = weatherData.main;
      let icon = weatherData.weather[0].icon;
      let city = weatherData.name;
      createWeatherInfoDivC(parseData.feels_like, parseData.humidity, parseData.pressure, parseData.temp, icon, city, parseData.temp_max, parseData.temp_min);     
    }catch (error) {
      alert("Please Enter the Valid name of a City")
    }

  }

  async function getSearchF(country) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&units=imperial&APPID=6afc4c4d6d160273a7559007309c6525`, {mode: 'cors'});    
      const weatherData = await response.json();
      const parseData = weatherData.main;
      let icon = weatherData.weather[0].icon;
      let city = weatherData.name;
      createWeatherInfoDivF(parseData.feels_like, parseData.humidity, parseData.pressure, parseData.temp, icon, city, parseData.temp_max, parseData.temp_min);     
    }catch (error) {
      alert("Please Enter the Valid name of a City")
    }

  }
export {getSearchC, getSearchF};