import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss']
})

export class MyNewComponentComponent implements OnInit {
  title = 'MY COMPONENT TILTLE';
  buttonStatus = 'disabled';
  myColorArr = ['blue', 'green', 'purple']
  orangeClass = true;
  cars;
  // name = 'Matt'
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png';
  myEvent(event) {
    console.log(event)
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.cars)
    this.cars = this.dataService.cars
  }

}
