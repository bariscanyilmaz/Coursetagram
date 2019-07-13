import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReplyPostComponent } from './reply-post/reply-post.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [AddPostComponent, DetailPostComponent, ReplyPostComponent],
  exports:[AddPostComponent,DetailPostComponent]
})
export class PostModule { }
