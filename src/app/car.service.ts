import { Injectable } from '@angular/core';
import { Car } from './model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public car: Car = {
    id: 10,
    brand: "Peugeot",
    model: "HDJ100",
    color: "Red"
  }


  constructor() { }
}
