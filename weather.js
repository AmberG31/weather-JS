// const WeatherClient = require("./weatherClient");

class Weather {
  constructor(client) {
    this.client = client
    this.data; 
  };

  load(city) {
    // this.client.fetchWeatherData(city).then((data) => { this.data = data })
    this.data = this.client.fetchWeatherData(city) // returns weatherData
  };

  getWeatherData() {
    return this.data
  };
};

module.exports = Weather;
