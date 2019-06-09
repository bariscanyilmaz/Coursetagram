import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  imports: [
    CommonModule,MaterialDesignModule
  ],
  declarations: [LessonsComponent],
  exports:[LessonsComponent]

})
export class LessonsModule { }
