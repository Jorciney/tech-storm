import { Action, createReducer, on } from '@ngrx/store';

import { WeatherData } from '../model/weather-data';
import * as WeatherActions from './weather.actions';

export const WEATHER_FEATURE_KEY = 'weather';

export interface WeatherState {
  weatherData: WeatherData | null; // which Weather record has been selected
  loaded: boolean; // has the Weather list been loaded
  error?: string | null; // last known error (if any)
}

export interface WeatherPartialState {
  readonly [WEATHER_FEATURE_KEY]: WeatherState;
}

export const initialWeatherState: WeatherState = {
  loaded: false,
  weatherData: null,
};

const reducer = createReducer(
  initialWeatherState,
  on(WeatherActions.initWeather, WeatherActions.loadWeatherData, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WeatherActions.loadWeatherSuccess, (state, { weather }) => ({ ...state, weatherData: weather, loaded: true })),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
