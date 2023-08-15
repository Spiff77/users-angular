import { Component, HostListener, Input } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input()
  user!: User

  constructor(private router: Router){}

  @HostListener('click')
  redirectToDetail(){
    this.router.navigate(['/users', this.user.id])
  }

}
