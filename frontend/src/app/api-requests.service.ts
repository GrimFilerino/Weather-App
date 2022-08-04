/**
 * API REQUEST SERVICE
 * contains all api requests and data for api
 * @author GrimFilerino
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  readonly ROOT_URL;

  private lat: string;
  private lon: string;
  private date: any;
  private headerDate: any;


  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
    this.lat = '55.480770';
    this.lon = '13.487488';

    this.date = Math.floor((new Date(Date.now()).valueOf() /1000)).toString(); //gets todays date
    
  }


  setDate(date: string){
    this.date = Math.floor((new Date(date).valueOf() / 1000)).toString(); //converts date in to unix timestamp
  }

  setCords(lat: string, lon: string){
    this.lat = lat;
    this.lon = lon;
  }

  getCord(uri: string, playload: Object){
    return this.post(uri, playload);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  getWeather(){
    let lat = this.lat;
    let lon = this.lon;
    let date = this.date;

    return this.post("", {lat, lon, date});
  }

}
