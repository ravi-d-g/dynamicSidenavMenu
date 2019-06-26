import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsList;
  itemDetails
  constructor(
    private appService: AppService,
    public dialog: MatDialog

  ) {

  }
  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.appService.getAllPost().subscribe(resp => {
      console.log('===> ', resp)
      this.itemsList = resp

    })

  }
  getDetails(id) {
    this.appService.getSinglePost(id).subscribe(resp => {
      console.log('resp', resp)
      this.itemDetails = resp
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      console.log('The dialog was closed');
    });
  }

}
