import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-reply-post',
  templateUrl: './reply-post.component.html',
  styleUrls: ['./reply-post.component.css']
})
export class ReplyPostComponent implements OnInit {

  @ViewChild('answerFile') answerFile:ElementRef<HTMLInputElement>;
  @Input() answer:Answer;
  @Output() removeReply=new EventEmitter<Answer>();

  constructor() { }

  ngOnInit() {
  }

  remove(){
    this.removeReply.emit(this.answer);
  }

}
