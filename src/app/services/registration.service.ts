import { Injectable } from '@angular/core';
import { Signupdata } from '../model/signupdata';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private data: Signupdata) { 
  }
  display(){
    console.log(this.data);
  }
}
