import { Component, inject, OnInit } from '@angular/core';
import { WeatherFacade } from '../data-access/+state/weather.facade';
import { TodaysForecastComponent } from './todays-forecast.component';
import { LetDirective } from '@ngrx/component';
import { DecimalPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'tech-storm-dashboard-view',
  template: `
    <div *ngrxLet="weatherData$; let weather" class="h-full w-full flex flex-row justify-center items-center">
      <div class="flex flex-col justify-center items-center" *ngrxLet="currentWeather$; let currentConditions">
        <div>DashboardView works!</div>
        <div class="font-extrabold text-3xl">{{ weather?.address | uppercase }}</div>
        <div class="font-extrabold text-3xl">{{ currentConditions?.temp | number : '1.0-0' }} °</div>
        <img
          [ngSrc]="'assets/icons/animated/' + currentConditions?.icon + '.svg'"
          [width]="200"
          [height]="150"
          alt="weather-icon" />
        <tech-storm-todays-forecast></tech-storm-todays-forecast>
      </div>
    </div>
  `,
  imports: [TodaysForecastComponent, LetDirective, UpperCasePipe, DecimalPipe, NgOptimizedImage],
})
export class DashboardViewComponent implements OnInit {
  private readonly weatherFacade = inject(WeatherFacade);
  weatherData$ = this.weatherFacade.weatherData$;
  currentWeather$ = this.weatherData$.pipe(map((weatherData) => weatherData?.currentConditions));

  ngOnInit(): void {
    this.weatherFacade.loadWeatherData('zemst');
  }
}
