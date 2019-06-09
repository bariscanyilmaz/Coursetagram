import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  selectedFile: File = null;
  imageUrl: any;
  lessons = [{ value: 1, viewValue: 'Matematik' }];

  @ViewChild('questionFile') questionFile: ElementRef;
  @ViewChild('questionPreview') questionPreview: ElementRef<HTMLDivElement>;
  @ViewChild('btnUpload') btnUpload: ElementRef<HTMLButtonElement>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.postForm = this.formBuilder.group({
      question: [null, Validators.required],
      answer: [null, Validators.required],
      lesson: [null, Validators.required],
      object: [null, Validators.required]
    });

  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];
      console.log(this.selectedFile);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (_event) => {
        this.imageUrl = reader.result;
      }

      this.questionPreview.nativeElement.style.display = 'block';
      this.btnUpload.nativeElement.style.display = 'none';

    }

  }

  onSumbit() {

    const formData = new FormData();
    formData.append('question', this.selectedFile, this.selectedFile.name);

  }

  openFile() {
    this.questionFile.nativeElement.click();
  }

  save() {

  }

  cancel() {
    this.postForm.reset();
    this.clearFile();
  }
  clearFile() {
    this.questionPreview.nativeElement.style.display = 'none';
    this.btnUpload.nativeElement.style.display = 'block';
    this.imageUrl='';

  }
}
