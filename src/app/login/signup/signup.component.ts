import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,  Validators, AbstractControl} from '@angular/forms'
import { PasswdService } from 'src/app/services/passwd.service';
import { Router } from '@angular/router';
import { Signupdata } from 'src/app/model/signupdata';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [PasswdService, Signupdata, RegistrationService],
})
export class SignupComponent implements OnInit {
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
password = this.passwd.generate();
  constructor(public passwd: PasswdService, private router: Router, private data: Signupdata, private regservice: RegistrationService) { 
  }
  passwordmatch(controls: AbstractControl):{[key: string]: any} | null{
      if(this.control.newpasswd.value==controls.value){
        return null;
      }else{
        return{'matcherror':  true};
      }
  }
  agevalid(control: AbstractControl): {[key:string]:any} | null{
var year = new Date();
      var age= 0;
      if (control.value !=null && control.value!=''){
        age = control.value['_i']['year'];
      }else{
        age = 0;
      }
      if (year.getFullYear() - age>16){
          return null;
      }else{
        return {'agenotvalid': true};
      }
    
  }



  Namevalid(){
    if(this.control.Name.invalid && !this.control.Name.untouched && this.control.Name.value!=""){
      return true;
    }
 else{
      return false;
    }

  }
  Namerequire(){
    if(this.control.Name.value==='' || this.control.Name.value==null && !this.control.Name.untouched){
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
    if(this.control.Email.value==='' || this.control.Email.value==null && !this.control.Email.untouched){
      return true;
    }
 else{
      return false;
    }

  }
 Gendervalid(){
  if(this.control.Gender.value==='' || this.control.Gender.value==null && this.control.Gender.touched){
    return true;
  }
else{
    return false;
  }
    
  }
  year = new Date();
  Agevalid(){
    if(this.control.Age.touched && this.control.Age.value!=''){
      var age= 0;
      if (this.control.Age.value !=null){
        age = this.control.Age.value['_i']['year'];
      }else{
        age = 0;
      }
      if (this.year.getFullYear() - age<16){
          return true;
      }
    }
 else{
      return false;
    }
  }
  Agerequire(){
    if(this.control.Age.value==='' || this.control.Age.value==null && !this.control.Age.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  Passwdvalid(){
    if(this.control.newpasswd.invalid && !this.control.newpasswd.untouched && this.control.newpasswd.value!=""){
      this.control.confirmpasswd.setValue('');
      return true;
    }
 else{
      return false;
    }
  }
  Passwordrequire(){
    if(this.control.newpasswd.value==='' || this.control.newpasswd.value==null && !this.control.newpasswd.untouched){
      this.control.confirmpasswd.setValue('');
      return true;
    }
 else{
      return false;
    }

  }
  Cfpasswdvalid(){
    if(this.control.newpasswd.value != this.control.confirmpasswd.value && this.control.confirmpasswd.value!=''){
      return true;
    }
 else{
      return false;
    }
    
  }
  Cfpasswdrequire(){
    if(this.control.confirmpasswd.value==='' || this.control.confirmpasswd.value==null &&  !this.control.confirmpasswd.untouched){
      return true;
    }
 else{
      return false;
    }

  }
  ngOnInit() {
    this.signup.controls.confirmpasswd.setValidators(this.passwordmatch.bind(this));
    this.control.Age.setValidators(this.agevalid.bind(this));

  }

onsubmit(){
  if (this.signup.valid){
    console.log(this.control);
    this.data.name = this.control.Name.value;
    this.data.email = this.control.Email.value;
    this.data.dob = [this.control.Age.value['_i']['date'], this.control.Age.value['_i']['month'], this.control.Age.value['_i']['year']];
    this.data.gender = this.control.Gender.value;
    this.data.newpasswd = this.control.newpasswd.value;
    this.data.cfpasswd = this.control.confirmpasswd.value;
    this.regservice.display();
    this.router.navigate(['emailverify']);

  }else{
    console.log(this.signup.status);

  }
}


}
