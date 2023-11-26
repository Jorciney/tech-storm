import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as WeatherActions from './weather.actions';
import { WeatherService } from '../weather.service';

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
  private readonly weatherService = inject(WeatherService);
  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeatherData),
      switchMap((action) => this.weatherService.getWeatherData(action.location)),
      map(() => WeatherActions.loadWeatherSuccess({ weather: [] })),
      catchError((error) => {
        console.error('Error', error);
        return of(WeatherActions.loadWeatherFailure({ error }));
      })
    )
  );
}
