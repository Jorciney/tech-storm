import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherData} from './model/weather-data';

@Injectable({providedIn: 'root'})
export class WeatherService {
  private readonly httpClient = inject(HttpClient);

  getWeatherData(location: string) {
    return this.httpClient.get<WeatherData>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9AU959UYVABKBXGYWQGJFAAAN&contentType=json`,
    )
  };
}
