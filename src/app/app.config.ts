import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromWeather from './data-access/+state/weather.reducer';
import { WeatherEffects } from './data-access/+state/weather.effects';
import { WeatherFacade } from './data-access/+state/weather.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(WeatherEffects),
    provideState(fromWeather.WEATHER_FEATURE_KEY, fromWeather.weatherReducer),
    WeatherFacade,
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideEffects(),
    provideStore(),
    provideClientHydration(),
    provideRouter(appRoutes),
  ],
};
