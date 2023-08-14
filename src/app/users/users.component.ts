import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  user: User | undefined;
  users:User[]  = []

  constructor(private userService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router  
            ){}
  
  ngOnInit(): void {
    this.userService.findAll()
    .subscribe(v => { 
      this.users = v
    })
  }
}
