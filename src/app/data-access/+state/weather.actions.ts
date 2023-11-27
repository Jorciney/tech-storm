import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../model/weather-data';

export const initWeather = createAction('[Weather Page] Init');
export const loadWeatherData = createAction('[Weather/API] load weather data', props<{ location: string }>());

export const loadWeatherSuccess = createAction(
  '[Weather/API] Load Weather Success',
  props<{ weather: WeatherData | null }>()
);

export const loadWeatherFailure = createAction('[Weather/API] Load Weather Failure', props<{ error: any }>());
