import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../car.service';
import { Subscription, interval, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-suv-car',
  templateUrl: './suv-car.component.html',
  styleUrls: ['./suv-car.component.scss']
})
export class SuvCarComponent implements OnInit, OnDestroy{

  mycar!: Car;
  subscription!: Subscription
  alive = true

  constructor(private carService: CarService){}


  ngOnInit(): void {
    this.mycar = this.carService.car
    interval(1000)
      .pipe(takeWhile( v => this.alive))
      .subscribe(v => console.log(v))

      interval(900)
      .pipe(takeWhile( v => this.alive))
      .subscribe(v => console.log(v))

      interval(1000)
      .pipe(takeWhile( v => this.alive))
      .subscribe(v => console.log(v));

      interval(700)
      .pipe(takeWhile( v => this.alive))
    .subscribe(v => console.log(v));
  }

  ngOnDestroy(): void {
    this.alive = false;

  }

  changeCarBrand() {
    this.mycar.brand = "Ferrari"
  }
}
