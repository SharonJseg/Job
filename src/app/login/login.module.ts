import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { InputModule } from '@job-common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}
