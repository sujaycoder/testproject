import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;
  signin = new FormGroup({
    Email : new FormControl('',  [Validators.required, Validators.email]),
    passwd : new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]+[-/?><:_@!#$%^&&*()+}{]+[A-Za-z0-9-/?><:_@!#$%^&&*()+}{]*/)]),
  });
  control = this.signin.controls;
  Emailvalid(){
    if(this.control.Email.invalid && !this.control.Email.untouched && this.control.Email.value!=""){
      return true;
    }
 else{
      return false;
    }
    
  }
  Emailrequire(){
    if(this.control.Email.value==='' || this.control.Email.value==null && !this.control.Email.untouched){
      return true;
    }
 else{
      return false;
    }

  }

  Passwdvalid(){
    if(this.control.passwd.invalid && !this.control.passwd.untouched && this.control.passwd.value!=""){
      return true;
    }
 else{
      return false;
    }
  }
  Passwordrequire(){
    if(this.control.passwd.value==='' || this.control.passwd.value==null && !this.control.passwd.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
