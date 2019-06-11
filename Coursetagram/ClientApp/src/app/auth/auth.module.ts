import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MaterialDesignModule,FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
