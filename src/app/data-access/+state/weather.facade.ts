import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as WeatherActions from './weather.actions';
import * as WeatherSelectors from './weather.selectors';

@Injectable()
export class WeatherFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(WeatherSelectors.selectWeatherLoaded));

  init() {
    this.store.dispatch(WeatherActions.initWeather());
  }

  loadWeatherData(location: string) {
    this.store.dispatch(WeatherActions.loadWeatherData({ location }));
  }
}
