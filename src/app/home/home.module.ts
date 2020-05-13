import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
  ]
})

export class HomeModule{ }

