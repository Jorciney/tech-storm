import { Action } from '@ngrx/store';

import * as WeatherActions from './weather.actions';
import { WeatherState, initialWeatherState, weatherReducer } from './weather.reducer';

describe('Weather Reducer', () => {
  const createWeatherData = jest.mock('WeatherData');

  describe('valid Weather actions', () => {
    it('loadWeatherSuccess should return the list of known Weather', () => {
      const weather = [createWeatherData];
      const action = WeatherActions.loadWeatherSuccess({ weather });

      const result: WeatherState = weatherReducer(initialWeatherState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = weatherReducer(initialWeatherState, action);

      expect(result).toBe(initialWeatherState);
    });
  });
});
