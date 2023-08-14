import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-reactive',
  templateUrl: './add-user-reactive.component.html',
  styleUrls: ['./add-user-reactive.component.scss']
})
export class AddUserReactiveComponent implements OnInit{

  formSubmitted = false;
  form!: FormGroup
  count = 0;
  
  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['Thomas', Validators.required],
      username: '',
      email: '',
      address: this.fb.group({
        name: '',
        streetname: '',
        streetnumber: ''
      })

    })
  }

  sendData() {
    this.formSubmitted = true
    if(this.form.valid){
      this.userService.addOne(this.form.value)
        .subscribe(() => this.router.navigateByUrl("/users"))
    }
  }
}