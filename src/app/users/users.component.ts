import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

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
              private router: Router,
              private ns: NotificationService
            ){}
  
  ngOnInit(): void {
    this.ns.usersupdated.subscribe(v => 
      this.userService.findAll()
        .subscribe(v => { 
          this.users = v
      })
    )
    this.ns.sendMesage();
  }
}
