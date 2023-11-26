import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";


export class WeatherService {
  private readonly httpClient = inject(HttpClient);

  getWeatherData(location: string) {
    return this.httpClient.get<WeatherData>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9AU959UYVABKBXGYWQGJFAAAN&contentType=json`);
  }

}
