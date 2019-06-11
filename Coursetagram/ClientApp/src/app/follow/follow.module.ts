
import { FollowDialogComponent } from './follow-dialog/follow-dialog.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,MaterialDesignModule
  ],
  declarations: [FollowDialogComponent],
  exports:[FollowDialogComponent],
  entryComponents:[FollowDialogComponent]
})
export class FollowModule { }
