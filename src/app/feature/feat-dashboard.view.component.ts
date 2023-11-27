import { Component, inject, OnInit } from '@angular/core';
import { WeatherFacade } from '../data-access/+state/weather.facade';

@Component({
  standalone: true,
  selector: 'tech-storm-dashboard-view',
  template: ` <div>DashboardView works!</div> `,
})
export class DashboardViewComponent implements OnInit {
  private readonly weatherFacade = inject(WeatherFacade);

  ngOnInit(): void {
    this.weatherFacade.loadWeatherData('zemst');
  }
}
