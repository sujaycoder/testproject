import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: UserlistComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
