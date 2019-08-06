import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [ProfileComponent, UserlistComponent],
  imports: [
    BaseModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
