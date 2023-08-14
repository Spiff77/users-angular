import { Component } from '@angular/core';
import { Car } from './model/car.model';
import { Person } from './model/person.model';
import { Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
  person: Person = new Person(10, "");
  subscription!: Subscription;


  constructor(){

  }

  closeInterval(){
  }

}