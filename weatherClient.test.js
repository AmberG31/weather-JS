const WeatherClient = require('./weatherClient');
const client = new WeatherClient();

describe('WeatherClient', () => {
  it('receivess weather data', (done) => {
    client.fetchWeatherData('London').then((data) => {
      expect(data.name).toEqual('London')
    })
    done();
  });
});
