import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  user!: User;

  constructor(private activatedroute: ActivatedRoute, private userService: UsersService){}

  ngOnInit(): void {

    const id = Number(this.activatedroute.snapshot.paramMap.get('id') ?? -1)

    this.userService.findOne(id).subscribe(v => this.user = v)


  }

}
