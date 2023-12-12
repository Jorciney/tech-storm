import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { WEATHER_FEATURE_KEY, weatherReducer } from './data-access/+state/weather.reducer';
import { provideEffects } from '@ngrx/effects';
import { WeatherEffects } from './data-access/+state/weather.effects';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./feature/feat-dashboard.view.component').then((c) => c.DashboardViewComponent),
    providers: [provideState(WEATHER_FEATURE_KEY, weatherReducer), provideEffects(WeatherEffects)],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
