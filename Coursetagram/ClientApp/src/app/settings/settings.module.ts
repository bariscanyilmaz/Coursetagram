import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MaterialDesignModule,ReactiveFormsModule
  ],
  declarations: [SettingsComponent],
  exports:[SettingsComponent]
})
export class SettingsModule { }
