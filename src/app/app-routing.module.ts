import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './login/loginform/loginform.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';

const routes: Routes = [{
  path: 'login',
  component: LoginformComponent,
  children: [
    {path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  }
  ]
},{
  path: '',
    component: HomeComponent,
    children: [{
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    },{
      path: 'home',
      component: DashboardComponent
    }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
