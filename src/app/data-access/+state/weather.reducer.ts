import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';

import * as WeatherActions from './weather.actions';
import {WeatherData} from "../model/weather-data";

export const WEATHER_FEATURE_KEY = 'weather';

export interface WeatherState extends EntityState<WeatherData> {
  selectedId?: string | number; // which Weather record has been selected
  loaded: boolean; // has the Weather list been loaded
  error?: string | null; // last known error (if any)
}

export interface WeatherPartialState {
  readonly [WEATHER_FEATURE_KEY]: WeatherState;
}

export const weatherAdapter: EntityAdapter<WeatherData> = createEntityAdapter<WeatherData>({
  selectId: (weatherData) => weatherData.longitude && weatherData.latitude ? `${weatherData.longitude}-${weatherData.latitude}` : '',
});

export const initialWeatherState: WeatherState = weatherAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialWeatherState,
  on(WeatherActions.initWeather, WeatherActions.loadWeatherData,(state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WeatherActions.loadWeatherSuccess, (state, {weather}) =>
    weatherAdapter.setAll(weather, {...state, loaded: true})
  ),
  on(WeatherActions.loadWeatherFailure, (state, {error}) => ({
    ...state,
    error,
  }))
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
