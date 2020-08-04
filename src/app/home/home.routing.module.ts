import { LoginGuard } from './../core/auth/login.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signIn/signIn.component';
import { SignupComponent } from './singup/signup.component';


const routers: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
        {
            path: '',
            component: SignInComponent,
        },
        {
            path: 'signup',
            component: SignupComponent,
        },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {
}
