import { Component, inject, OnInit } from '@angular/core';
import { WeatherFacade } from '../data-access/+state/weather.facade';
import {TodaysForecastComponent} from "./todays-forecast.component";
import {LetDirective} from "@ngrx/component";
import {UpperCasePipe} from "@angular/common";

@Component({
  standalone: true,
  selector: 'tech-storm-dashboard-view',
  template: `
      <div *ngrxLet="weatherData$; let weather" class="h-full w-full flex flex-row justify-center items-center">
          <div class="flex flex-col justify-center items-center">
              <div>DashboardView works!</div>
              <div class="font-extrabold text-3xl">{{weather?.address | uppercase}}</div>
              <tech-storm-todays-forecast></tech-storm-todays-forecast>
          </div>
      </div>
  `,
  imports: [
    TodaysForecastComponent,
    LetDirective,
    UpperCasePipe
  ]
})
export class DashboardViewComponent implements OnInit {
  private readonly weatherFacade = inject(WeatherFacade);
  weatherData$ = this.weatherFacade.weatherData$;

  ngOnInit(): void {
    this.weatherFacade.loadWeatherData('zemst');
  }
}
