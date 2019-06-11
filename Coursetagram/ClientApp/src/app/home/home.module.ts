import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PostModule } from '../post/post.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,PostModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
