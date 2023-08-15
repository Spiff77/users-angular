import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-static-users',
  templateUrl: './static-users.component.html',
  styleUrls: ['./static-users.component.scss']
})
export class StaticUsersComponent implements OnInit{
  
  users$!: Observable<User[]>

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.users$ = this.userService.findAll()
  }


}
