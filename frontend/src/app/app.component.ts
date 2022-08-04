import { Component } from '@angular/core';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather for booking';

  constructor() {}
}
