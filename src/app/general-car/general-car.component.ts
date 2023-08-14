import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-general-car',
  templateUrl: './general-car.component.html',
  styleUrls: ['./general-car.component.scss']
})
export class GeneralCarComponent implements OnInit{
  mycar!: Car;

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this.mycar = this.carService.car
  }

}
