import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as WeatherActions from './weather.actions';
import * as WeatherSelectors from './weather.selectors';

@Injectable()
export class WeatherFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(WeatherSelectors.selectWeatherLoaded));
  allWeather$ = this.store.pipe(select(WeatherSelectors.selectAllWeather));
  selectedWeather$ = this.store.pipe(select(WeatherSelectors.selectEntity));
  init() {
    this.store.dispatch(WeatherActions.initWeather());
  }

  loadWeatherData(location: string) {
    this.store.dispatch(WeatherActions.loadWeatherData({ location }));
  }
}
