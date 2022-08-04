/**
 * Show Weather Information Divs
 * contains all data to show users on webpage 
 * @author GrimFilerino
 */

import { Component, NgModule, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ApiRequestsService } from '../api-requests.service';


@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})

export class ShowWeatherComponent implements OnInit {
  
  public weather = [
    { "index": "8",  "time": "08:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
    { "index": "13", "time": "13:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
    { "index": "18", "time": "18:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
    { "index": "22", "time": "22:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" }
  ];

  public todaysDate;

  divContainer22PM: any;
  divContainer8AM: any;
  divContainer13PM: any;
  divContainer8AMextended: any;
  divContainer8AMinfobox: any;
  divContainer18PM: any;
  divContainer13PMextended: any;
  divContainer18PMextended: any;
  divContainer22PMextended: any;
  divContainer13PMinfobox: any;
  divContainer18PMinfobox: any;
  divContainer22PMinfobox: any;

  intervalID: any;


  constructor(private apiReq: ApiRequestsService) {
    this.darkskyAPI();
    
    let date: any;
    date = Math.floor((new Date(Date.now()).valueOf() /1000)).toString(); //gets todays date
    this.todaysDate = new Date(date * 1000).toDateString(); //shows todays weather above weather divs
    
    //weather array that holds all the information on the selected times
    this.weather = [
      { "index": "8",  "time": "08:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
      { "index": "13", "time": "13:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
      { "index": "18", "time": "18:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" },
      { "index": "22", "time": "22:00", "summary": "", "icon": "", "temprature": "", "windSpeed": "", "pressure": "", "visibility": "", "uvIndex": "", "humidity": "" }
    ];

    //weather divs
    this.divContainer8AM = document.getElementsByClassName("div-container-weather-8");
    this.divContainer13PM = document.getElementsByClassName("div-container-weather-13");
    this.divContainer18PM = document.getElementsByClassName("div-container-weather-18");
    this.divContainer22PM = document.getElementsByClassName("div-container-weather-22");
    
    //weather divs extended information when pressed on
    this.divContainer8AMextended = document.getElementsByClassName("div-container-weather-info-extended-8");
    this.divContainer13PMextended = document.getElementsByClassName("div-container-weather-info-extended-13");
    this.divContainer18PMextended = document.getElementsByClassName("div-container-weather-info-extended-18");
    this.divContainer22PMextended = document.getElementsByClassName("div-container-weather-info-extended-22");

    //weather information div with all the wether information
    this.divContainer8AMinfobox = document.getElementsByClassName("div-container-weather-information-box-8");
    this.divContainer13PMinfobox = document.getElementsByClassName("div-container-weather-information-box-13");
    this.divContainer18PMinfobox = document.getElementsByClassName("div-container-weather-information-box-18");
    this.divContainer22PMinfobox = document.getElementsByClassName("div-container-weather-information-box-22");
    
  }

  ngOnInit(): void {
    this.intervalID = interval(3000).subscribe((d) => {
      this.darkskyAPI(); //updates the weather information on the divs every 3 secounds
    });
  }


  //refresh the weather divs after return animation
  refreshDivs() {
    this.intervalID = interval(1350).subscribe((d) => {
      this.showDIVS(); //sets the weather divs back to normal
    });
  }

  //play animation when div is pressed
  showDIVS(i: any = ""){

    //if 8am div is pressed and not extended play extened animation
    if(i == 8 && this.divContainer22PM[0].style.display != "none"){
      this.divContainer8AM[0].style.animation = "transformDiv 1.2s 0s forwards"; //plays extended animation
      
      this.divContainer8AMextended[0].style.visibility = "visible"; //makes the extended information show
      this.divContainer8AMinfobox[0].style.top = "100px"; //sets extended divs position to be 100px from top

      this.divContainer8AM[0].style.display = "inline-block"; //shows the 8am div
      this.divContainer13PM[0].style.display = "none"; //hiddes 13pm div
      this.divContainer22PM[0].style.display = "none"; //hiddes 18pm div
      this.divContainer18PM[0].style.display = "none"; //hiddes 22pm div
    } 

    //if 13pm div is pressed and not extended play extened animation
    else if(i == 13 && this.divContainer8AM[0].style.display != "none"){
      this.divContainer13PM[0].style.animation = "transformDiv 1.2s 0s forwards"; //plays extended animation
      
      this.divContainer13PMextended[0].style.visibility = "visible"; //makes the extended information show
      this.divContainer13PMinfobox[0].style.top = "100px"; //sets extended divs position to be 100px from top

      this.divContainer8AM[0].style.display = "none"; //hiddes 8am div
      this.divContainer13PM[0].style.display = "inline-block"; //shows the 13pm div
      this.divContainer22PM[0].style.display = "none"; //hiddes 18pm div
      this.divContainer18PM[0].style.display = "none"; //hiddes 22pm div
    } 

    else if(i == 18 && this.divContainer13PM[0].style.display != "none"){
      this.divContainer18PM[0].style.animation = "transformDiv 1.2s 0s forwards"; 
    
      this.divContainer18PMextended[0].style.visibility = "visible";
      this.divContainer18PMinfobox[0].style.top = "100px";

      this.divContainer8AM[0].style.display = "none";
      this.divContainer13PM[0].style.display = "none";
      this.divContainer22PM[0].style.display = "none";
      this.divContainer18PM[0].style.display = "inline-block";
    } 

    else if(i == 22 && this.divContainer18PM[0].style.display != "none"){
      this.divContainer22PM[0].style.animation = "transformDiv 1.2s 0s forwards"; 
    
      this.divContainer22PMextended[0].style.visibility = "visible";
      this.divContainer22PMinfobox[0].style.top = "100px";

      this.divContainer8AM[0].style.display = "none";
      this.divContainer13PM[0].style.display = "none";
      this.divContainer22PM[0].style.display = "inline-block";
      this.divContainer18PM[0].style.display = "none";
    } 


    //if 8am div is pressed and is extended play return animation
    else if(i == 8 && this.divContainer22PM[0].style.display == "none"){
      this.divContainer8AM[0].style.animation = "transformDivBack 1.2s"; //plays return animation
      
      this.divContainer8AMextended[0].style.visibility = "hidden"; //hiddes extended infomation div

      this.refreshDivs(); //restets all divs back to normal after animation is done
    } 

    else if(i == 13 && this.divContainer8AM[0].style.display == "none"){
      this.divContainer13PM[0].style.animation = "transformDivBack 1.2s"; 
      
      this.divContainer13PMextended[0].style.visibility = "hidden";

      this.refreshDivs();
    } 

    else if(i == 18 && this.divContainer13PM[0].style.display == "none"){
      this.divContainer18PM[0].style.animation = "transformDivBack 1.2s"; 
      
      this.divContainer18PMextended[0].style.visibility = "hidden";

      this.refreshDivs();
    } 

    else if(i == 22 && this.divContainer18PM[0].style.display == "none"){
      this.divContainer22PM[0].style.animation = "transformDivBack 1.2s"; 
      
      this.divContainer22PMextended[0].style.visibility = "hidden";

      this.refreshDivs();
    } 


    //restets all weather divs back to normal
    else {
      this.divContainer8AM[0].style.animation = "";
      this.divContainer13PM[0].style.animation = ""; 
      this.divContainer22PM[0].style.animation = "";
      this.divContainer18PM[0].style.animation = "";

      this.divContainer8AMextended[0].style.visibility = "hidden";
      this.divContainer13PMextended[0].style.visibility = "hidden";
      this.divContainer18PMextended[0].style.visibility = "hidden";
      this.divContainer22PMextended[0].style.visibility = "hidden";
      
      this.divContainer8AMinfobox[0].style.top = "250px";
      this.divContainer13PMinfobox[0].style.top = "250px";
      this.divContainer18PMinfobox[0].style.top = "250px";
      this.divContainer22PMinfobox[0].style.top = "250px";

      this.divContainer8AM[0].style.display = "inline-block";
      this.divContainer13PM[0].style.display = "inline-block";
      this.divContainer22PM[0].style.display = "inline-block";
      this.divContainer18PM[0].style.display = "inline-block";
      
      this.intervalID.unsubscribe();
    }
  }


  //calls darksky api and gets the weather results hourly
  darkskyAPI (){
    this.apiReq.getWeather().subscribe((res: any) => {
      console.log(res);

      let reshourly = res;

      //sets all the needed infomation in weather json object to infomration from api
      this.weather.forEach(e  => {
        let i = e.index;
        e.summary     = reshourly[i].summary;
        e.icon        = "../../assets/Images/Weather/" + reshourly[i].icon + ".png"; //gets icon
        e.temprature  = Math.floor(reshourly[i].temperature) + " °C";
        e.windSpeed   = "Windspeed " + reshourly[i].windSpeed + " m/s";
        e.pressure    = "Pressure " + reshourly[i].pressure;
        e.visibility  = "Visibility " +reshourly[i].visibility;
        e.uvIndex     = "Uv Index " + reshourly[i].uvIndex;
        e.humidity    = "Humidity " + reshourly[i].humidity;
      });
    });
  }

  

}
