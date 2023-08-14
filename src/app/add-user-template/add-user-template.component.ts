import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-user-template',
  templateUrl: './add-user-template.component.html',
  styleUrls: ['./add-user-template.component.scss']
})
export class AddUserTemplateComponent {

  formSubmitted = false;

  user: User = {name: '', username: '', email: ''}


  sendData(isvalid: boolean|null) {
    this.formSubmitted = true
    if(isvalid){
      console.log(this.user)
    }
  }

}
