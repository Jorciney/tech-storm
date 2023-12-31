import { Component, Input } from '@angular/core';
import { Hour } from '../data-access/model/weather-data';
import { DatePipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { MapFunctionPipe } from '../utils/map-function.pipe';

@Component({
  standalone: true,
  selector: 'tech-storm-todays-forecast',
  template: `
    <div class="flex flex-col overflow-x-auto w-8/12 p-4 text-gray-500 justify-start bg-gray-100 rounded-2xl">
      <div class="text-lg font-bold">TODAY'S FORECAST</div>
      <div>
        <div class="flex flex-row justify-between items-center max-w-full overflow-x-auto">
          <div
            class="flex flex-col justify-center items-center font-bold px-5 border-r"
            *ngFor="let hour of todaysForecast | mapToFunction : filterTimeAfterCurrentTime">
            <div>{{ hour?.datetime?.substring(0, 5) }}h</div>
            <img
              *ngIf="hour?.icon"
              alt="{{ hour?.conditions }}"
              [ngSrc]="'assets/icons/static/' + hour?.icon + '.png'"
              [width]="100"
              [height]="100" />
            <div>{{ hour.temp }} °</div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [NgForOf, NgIf, NgOptimizedImage, DatePipe, MapFunctionPipe],
})
export class TodaysForecastComponent {
  @Input() todaysForecast: Hour[] = [];
  filterTimeAfterCurrentTime = (hours: Hour[]) => {
    const currentHour = new Date().getHours();
    return hours.filter((hour) => Number(hour.datetime.substring(0, 2)) >= currentHour);
  };
}
