import { weatherAdapter, WeatherPartialState, initialWeatherState } from './weather.reducer';
import * as WeatherSelectors from './weather.selectors';
import { WeatherData } from '../model/weather-data';

describe('Weather Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getWeatherId = (it: WeatherData) => (it.longitude && it.latitude ? `${it.longitude}-${it.latitude}` : '');
  const createWeatherData = jest.mock<WeatherData>;

  let state: WeatherPartialState;

  beforeEach(() => {
    state = {
      weather: weatherAdapter.setAll([createWeatherData as unknown as WeatherData], {
        ...initialWeatherState,
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
      }),
    };
  });

  describe('Weather Selectors', () => {
    it('selectAllWeather() should return the list of Weather', () => {
      const results = WeatherSelectors.selectAllWeather(state);
      const selId = getWeatherId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = WeatherSelectors.selectEntity(state) as WeatherData;
      const selId = getWeatherId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectWeatherLoaded() should return the current "loaded" status', () => {
      const result = WeatherSelectors.selectWeatherLoaded(state);

      expect(result).toBe(true);
    });

    it('selectWeatherError() should return the current "error" state', () => {
      const result = WeatherSelectors.selectWeatherError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
