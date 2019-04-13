import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
  CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ]
})
export class AuthModule { }
