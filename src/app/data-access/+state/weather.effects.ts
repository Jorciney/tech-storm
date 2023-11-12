import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as WeatherActions from './weather.actions';
import * as WeatherFeature from './weather.reducer';

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.initWeather),
      switchMap(() => of(WeatherActions.loadWeatherSuccess({ weather: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(WeatherActions.loadWeatherFailure({ error }));
      })
    )
  );
}
