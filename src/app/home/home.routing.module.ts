import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from '../core/auth/login.guard';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoginGuard],
    children: [
      { path: '', component: SignInComponent },

      { path: 'signup', component: SignUpComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
