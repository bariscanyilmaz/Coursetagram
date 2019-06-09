import { Component, OnInit } from '@angular/core';
import { ILessonModel } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  selectedLessons:ILessonModel[];
  lessons:ILessonModel[];
  selected:ILessonModel;
  constructor() { }

  ngOnInit() {
    this.selectedLessons=[{id:1,name:'Matematik'}]
    this.lessons=[{id:1,name:'Matematik'},{id:1,name:'Fizik'},{id:1,name:'Kimya'}];
  }

  add(){
      this.selectedLessons.push(this.selected);
  }

  remove(i:number){
    this.selectedLessons.splice(i,1);
  }

}
