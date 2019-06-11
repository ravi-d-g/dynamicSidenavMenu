import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  sideClick: EventEmitter<any> = new EventEmitter();

  @Output()
  userLogOut: EventEmitter<any> = new EventEmitter();

  @Input()
  mainMenuList = []

  constructor() { }

  minimizeSidebar() {
    this.sideClick.emit(true);
  }
  
  ngOnInit() {
    console.log('Input Menu List ===>', this.mainMenuList)
  }

  logOut() {
    console.log('logout');
    this.userLogOut.emit(true)
  }

}
