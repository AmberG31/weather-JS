const myApiKey = require('./apiKey')

class WeatherClient {
  constructor() {
    this.client = this;
  }

  fetchWeatherData(city) {
    const myApiKey = require('./apiKey')
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${myApiKey}`)
      .then((response) => response.json())
      .then((weatherData) => {
        console.log(`Weather data for ${weatherData.name}:`)
        console.log(weatherData);
        return weatherData;
      })
  };
};

module.exports = WeatherClient;
