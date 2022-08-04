/**
 * BUTTON PRESS DATE/MAP FORM
 * show or hidde date/map form on button press
 * @author GrimFilerino
 */

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.scss']
})
export class MapButtonComponent implements OnInit {

  isShow: boolean;

  constructor() {
    this.isShow = true;
  }
  ngOnInit(): void {}

  buttonClick(){
    this.isShow = !this.isShow;
  }

}
