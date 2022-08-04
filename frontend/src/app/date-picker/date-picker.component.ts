/**
 * DATEPICKER
 * gets address and sets address
 * @author GrimFilerino
 */



import { Component } from '@angular/core';
import { ApiRequestsService } from '../api-requests.service';
import { ShowWeatherComponent } from '../show-weather/show-weather.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  inputField: any;

  constructor(private apiReq: ApiRequestsService) { 
    this.inputField = document.getElementsByClassName("inputfield")[0];
  }
  
  setDate(date: string){
    this.apiReq.setDate(date); //sets date
  }

}
