import { Component } from '@angular/core';
import { Car } from './model/car.model';
import { Person } from './model/person.model';
import { Subject, Subscription, filter, interval, map } from 'rxjs';

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

}


/*
  ProductList ---> 
    ngFor on ProductCard 
      use the :host for cool css
      use the @HostListener for redirection to detail
*/