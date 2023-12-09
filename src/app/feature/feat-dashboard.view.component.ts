import { Component, inject, OnInit } from '@angular/core';
import { WeatherFacade } from '../data-access/+state/weather.facade';
import { TodaysForecastComponent } from './todays-forecast.component';
import { LetDirective } from '@ngrx/component';
import { DecimalPipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'tech-storm-dashboard-view',
  template: `
    <div *ngrxLet="weatherData$; let weather" class="h-full w-full flex flex-col justify-center items-center">
      <div class="flex flex-row items-center justify-between gap-5" *ngrxLet="currentWeather$; let currentConditions">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col">
              <div class="font-extrabold text-3xl">{{ weather?.address | uppercase }}</div>
              <div class="text-gray-500 text-xs">Feels like {{ weather?.currentConditions?.feelslike }} °</div>
              <div class="text-gray-500 text-xs">
                Chance of {{ weather?.currentConditions?.preciptype }} {{ weather?.currentConditions?.precipprob }} %
              </div>
              <div class="text-gray-500 text-xs">Sunset at {{ weather?.currentConditions?.sunset }}</div>
            </div>
          </div>
          <div class="font-extrabold text-3xl">{{ currentConditions?.temp | number : '1.0-0' }} °</div>
        </div>
        <img
          *ngIf="currentConditions?.icon"
          alt="{{ currentConditions?.conditions }}"
          priority="true"
          [ngSrc]="'assets/icons/animated/' + currentConditions?.icon + '.svg'"
          [width]="200"
          [height]="200" />
      </div>
      <tech-storm-todays-forecast
        [todaysForecast]="weather?.days?.[0]?.hours || []"
        class="w-full"></tech-storm-todays-forecast>
    </div>
  `,
  imports: [TodaysForecastComponent, LetDirective, UpperCasePipe, DecimalPipe, NgOptimizedImage, NgIf],
})
export class DashboardViewComponent implements OnInit {
  private readonly weatherFacade = inject(WeatherFacade);
  weatherData$ = this.weatherFacade.weatherData$;
  currentWeather$ = this.weatherData$.pipe(map((weatherData) => weatherData?.currentConditions));

  ngOnInit(): void {
    this.weatherFacade.loadWeatherData('zemst');
  }
}
