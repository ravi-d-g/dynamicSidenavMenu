import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { Post } from './post.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {


  public addPostForm: FormGroup;
  private post = {} as Post
  respData
  ngOnInit() {
    this.createForm()
  }

  constructor(
    public dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private appService: AppService

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.addPostForm = this.formBuilder.group({
      userId: [null, [Validators.required]],
      postTitle: [null, [Validators.required]],
      postBody: [null, [Validators.required]],
    });
  }


  get f() { return this.addPostForm.controls; }


  savePost() {
    console.log('this.addPostForm', this.addPostForm.value)

    this.post.userId = 1;
    this.post.postTitle = this.addPostForm.value.postTitle
    this.post.postBody = this.addPostForm.value.postBody
    console.log('this.post', this.post)

    this.markFormAsTouched();
    if (this.addPostForm.valid) {
      this.appService.savePost(11, this.addPostForm.value.postTitle, this.addPostForm.value.postBody).subscribe(resp => {
        console.log('resp', resp)
        this.respData = resp
      })
    }

  }

  private markFormAsTouched() {
    for (const key in this.addPostForm.controls) {
      if (this.addPostForm.controls.hasOwnProperty(key)) {
        this.addPostForm.controls[key].markAsTouched();
      }
    }
  }
}
