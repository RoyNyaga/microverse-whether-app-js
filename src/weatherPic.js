async function getWeatherPic(div) {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ndz40WtH2Gz6iIkBbvf4K3laFPWRsByL&s=weather', {mode: 'cors'});
      const weatherdata = await response.json();
      const imgLink = weatherdata.data.images.original.url;
      div.style.background = `url(${imgLink})`
    }catch (error) {
   console.log(error)
  }

  }

export default getWeatherPic;