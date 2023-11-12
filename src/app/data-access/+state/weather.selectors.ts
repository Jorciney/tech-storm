import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEATHER_FEATURE_KEY, WeatherState, weatherAdapter } from './weather.reducer';

// Lookup the 'Weather' feature state managed by NgRx
export const selectWeatherState = createFeatureSelector<WeatherState>(WEATHER_FEATURE_KEY);

const { selectAll, selectEntities } = weatherAdapter.getSelectors();

export const selectWeatherLoaded = createSelector(selectWeatherState, (state: WeatherState) => state.loaded);

export const selectWeatherError = createSelector(selectWeatherState, (state: WeatherState) => state.error);

export const selectAllWeather = createSelector(selectWeatherState, (state: WeatherState) => selectAll(state));

export const selectWeatherEntities = createSelector(selectWeatherState, (state: WeatherState) => selectEntities(state));

export const selectSelectedId = createSelector(selectWeatherState, (state: WeatherState) => state.selectedId);

export const selectEntity = createSelector(selectWeatherEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
