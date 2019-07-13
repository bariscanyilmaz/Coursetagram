import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';

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
  answers:Answer[]=[];

  @ViewChild('answerFile') answerFile:ElementRef<HTMLInputElement>;

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
    this.answerFile.nativeElement.click();
  }

  onFileChange(event){
    if (event.target.files[0]) {
      let selectedFile = <File>event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (_event) => {
        let ans=new Answer();
        ans.imagePath =reader.result;
        this.answers.push(ans);
        
      }

      

    }
  }

  removeReply(answer:Answer){
    const indx= this.answers.indexOf(answer);
    this.answers.splice(indx,1);
  }
  
}
