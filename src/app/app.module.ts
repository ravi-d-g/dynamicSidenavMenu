import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
 import { HttpClientModule } from '@angular/common/http';
 import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AddPostComponent } from './add-post/add-post.component';
import { MatDialogModule } from '@angular/material';
@NgModule({
  entryComponents:[AddPostComponent],

  declarations: [
    AppComponent,
      AddPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ScrollDispatchModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
