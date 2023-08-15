import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-user-reactive',
  templateUrl: './add-user-reactive.component.html',
  styleUrls: ['./add-user-reactive.component.scss']
})
export class AddUserReactiveComponent implements OnInit{


  formSubmitted = false;
  form!: FormGroup
  count = 0;
  currentroute = ''
  constructor(
      private fb: FormBuilder,
      private userService: UsersService, 
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private ns: NotificationService
      ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['Thomas', Validators.required],
      username: '',
      emails: this.fb.array([
        this.fb.group({name: '', email: ''}),
      ]),
      address: this.fb.group({
        name: '',
        streetname: '',
        streetnumber: ''
      })
    })
    this.currentroute = this.activatedRoute.snapshot.url[0].path;
    
  }

  sendData() {
    this.formSubmitted = true
    if(this.form.valid){
      this.userService.addOne(this.form.value)
        .subscribe(() => {
          if(this.currentroute == 'user-dashboard')
            this.ns.sendMesage()
          else
            this.router.navigateByUrl("/users")
        })
        
    }
  }

  getarray(formControlName: string): FormArray {
    return (this.form.get(formControlName) as FormArray)
  }

  addEmail(){
    this.getarray('emails').push(this.fb.group({name: '', email: ''}))
  }

  removeEmail(index: number){
    this.getarray('emails').removeAt(index)
  }
}