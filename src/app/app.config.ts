import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { WeatherFacade } from './data-access/+state/weather.facade';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideHttpClient(withFetch()),
    WeatherFacade,
    provideStoreDevtools({
      maxAge: 25,
      connectInZone: true,
    }),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
};
