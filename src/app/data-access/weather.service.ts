import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './model/weather-data';
import {tap} from "rxjs";

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly httpClient = inject(HttpClient);

  getWeatherData(location: string) {
    console.log('WeatherService.getWeatherData', location);
    return this.httpClient.get<WeatherData>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9AU959UYVABKBXGYWQGJFAAAN&contentType=json`,
    ).pipe(
      tap(response => console.log("logging response", response)),
    )};
}
