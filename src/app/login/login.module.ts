import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginrouteRoutingModule } from './loginroute-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [LoginformComponent, SigninComponent, SignupComponent, EmailverificationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LoginrouteRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    LoginformComponent,


  ]
})
export class LoginModule { }
