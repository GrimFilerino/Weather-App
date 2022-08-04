/**
 * REQUEST MAP GEOLOCATION
 * gets logitude and latitude from inputed address
 * @author GrimFilerino
 */


import { Component, ElementRef } from '@angular/core';
import { repeat } from 'rxjs';
import { ApiRequestsService } from '../api-requests.service';
import { MapButtonComponent } from '../map-button/map-button.component';
import { ShowWeatherComponent } from '../show-weather/show-weather.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {

  text = {"text" : ""};
  src = "56.163134,15.590204";
  input = document.getElementById("search");
  search: any;

  public mapbtn: MapButtonComponent;

  constructor(private apiReq: ApiRequestsService) {
    this.search = "sweden";
    this.mapbtn = new MapButtonComponent();
  }

  //sets the text in the text json object to the inputed address
  setText(){
    this.text.text = this.search;
  }

  //when input changes
  onSearchChange(inputText: string) {
    this.search = inputText; //sets this.search to inputed address
    this.setText();
    this.cords();
  }

  //gets cords for darksky api weather search
  cords(){
    
    //calls geocode earth api to get logitude and latidue of address entered by user
    this.apiReq.getCord("cords", this.text).subscribe((res: any) => {
      if(res != null){
        let lat = res[3];
        let lon = res[2];
        this.src = lat + "," + lon;

        this.apiReq.setCords(lat,lon);
      }
    });
  }


}
