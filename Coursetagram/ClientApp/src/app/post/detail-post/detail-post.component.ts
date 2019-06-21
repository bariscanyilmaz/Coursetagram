import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  isLike:boolean=false;
  isBookmark:boolean=false;
  answer:string='A';
  lesson:string='Matematik';
  object:string='Polinom';

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.isLike=!this.isLike;
  }

  bookmark(){
    this.isBookmark=!this.isBookmark;
  }

  reply(){

  }

  
}
