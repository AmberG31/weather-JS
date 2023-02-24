const Weather = require('./weather');

describe('Weather class', () => {
  it('returns the weather data', () => {
    const mockClient = {
      fetchWeatherData: (city) => { return { name: city }}
    }
    const weather = new Weather(mockClient);
    // check if fetchWeatherData will be called
    // check how we handle what fetchWeatherData returns 
    weather.load('london')
    // this.data = { name: 'london' }
    expect(weather.getWeatherData()).toEqual({ name: 'london' })
  })
});
