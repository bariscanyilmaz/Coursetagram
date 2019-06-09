import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { QuestionModule } from '../question/question.module';
import { SettingsModule } from '../settings/settings.module';
import { LessonsModule } from '../lessons/lessons.module';

@NgModule({
  imports: [
    CommonModule,MaterialDesignModule,QuestionModule,SettingsModule,LessonsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
