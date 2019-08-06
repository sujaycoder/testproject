import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, PatternValidator, AbstractControl} from '@angular/forms'
import { Signindata } from 'src/app/model/signindata';
import { PasswdService } from 'src/app/services/passwd.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [Signindata, PasswdService]
})
export class SignupComponent implements OnInit {
  myDate = new Date();
  hide = true;
  hidec = true;
  signup = new FormGroup({
    Name : new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z]/)]),
    Email : new FormControl('',  [Validators.required, Validators.email]),
    Gender : new FormControl('', [Validators.required]),
    Age : new FormControl('', [Validators.required]),
    newpasswd : new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]+[-/?><:_@!#$%^&&*()+}{]+[A-Za-z0-9-/?><:_@!#$%^&&*()+}{]*/)]),
    confirmpasswd : new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]+[-/?><:_@!#$%^&&*()+}{]+[A-Za-z0-9-/?><:_@!#$%^&&*()+}{]*/)]),
  });
  control = this.signup.controls;
password = this.passwd.generate()
  constructor(private data: Signindata, public passwd: PasswdService) { 
  }

  Namevalid(){
    console.log('age')
    if(this.control.Name.invalid && !this.control.Name.untouched && this.control.Name.value!=""){
      return true;
    }
 else{
      return false;
    }

  }
  Namerequire(){
    if(this.control.Name.value==='' && !this.control.Name.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  Emailvalid(){
    if(this.control.Email.invalid && !this.control.Email.untouched && this.control.Email.value!=""){
      return true;
    }
 else{
      return false;
    }
    
  }
  Emailrequire(){
    if(this.control.Email.value==='' && !this.control.Email.untouched){
      return true;
    }
 else{
      return false;
    }

  }
 Gendervalid(){
  if(this.control.Gender.value==='' && this.control.Gender.touched){
    return true;
  }
else{
    return false;
  }
    
  }
  year = new Date();
  Agevalid(){
    if(this.control.Age.touched && this.control.Age.value!=''){
      console.log('here');
      if (this.year.getFullYear() - this.control.Age.value['_i']['year']<16){
        console.log('herealso', this.year.getFullYear() - this.control.Age.value['_i']['year']);
          return true;
      }
    }
 else{
      return false;
    }
  }
  Agerequire(){
    if(this.control.Age.value==='' && !this.control.Age.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  Passwdvalid(){
    console.log('1st')
    if(this.control.newpasswd.invalid && !this.control.newpasswd.untouched && this.control.newpasswd.value!=""){
      return true;
    }
 else{
      return false;
    }
  }
  Passwordrequire(){
    console.log('2nd')
    if(this.control.newpasswd.value==='' && !this.control.newpasswd.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  Cfpasswdvalid(){
    console.log(this.control.confirmpasswd);
    if(this.control.newpasswd.value != this.control.confirmpasswd.value && this.control.confirmpasswd.touched){
      console.log('valid');
      return true;
    }
 else{
      return false;
    }
    
  }
  Cfpasswdrequire(){
    console.log('here also');
    if(this.control.confirmpasswd.value==='' &&  !this.control.confirmpasswd.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  ngOnInit() {
    console.log(this.control.Age, this.year.getFullYear());
  }




}
