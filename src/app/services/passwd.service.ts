import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswdService {
  generate(){
   return Math.random().toString(36).slice(-8);
  }
}
