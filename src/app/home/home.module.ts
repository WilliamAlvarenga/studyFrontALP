import { SignUpService } from './singup/signgup.service';
import { HomeRoutingModule } from './home.routing.module';
import { SignupComponent } from './singup/signup.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signIn/signIn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [
    SignInComponent,
    SignupComponent,
    HomeComponent
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule { }
