import { Component, OnInit } from '@angular/core';

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
  // name = 'Matt'
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png';
  myEvent(event) {
    console.log(event)
  }
  constructor() { }

  ngOnInit() {
  }

}
