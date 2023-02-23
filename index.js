const myApiKey = require('./apiKey')

const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${myApiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData)
  });

console.log('Requesting weather data');
