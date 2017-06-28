import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  cars = ['Ford', 'Chevy', 'Buick'];
  myData() {
    return this.cars;
  }
  constructor() { }



}
