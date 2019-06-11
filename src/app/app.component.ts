import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 320;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]
  navItems: any;
  navbarItems: any;
  closeMenu = false
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
      // this.closeMenu = true
    } else {
      this.contentMargin = 320;
      // this.closeMenu = false

    }
  }

  onToolbarMenuOpen() {
    this.isMenuOpen = true;
    // this.closeMenu = false
    this.contentMargin = 320;
  }
  sidenavEvents(str) {
    console.log(str);
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private appService: AppService,
    private router: Router,

  ) {

  }
  ngOnInit() {
    this.getVerticalMenu('Ho');
    this.getHorizontalMenu('Ho')
  }

  getVerticalMenu(role) {
    this.appService.getVerticalMenu(role).subscribe(resp => {
      // console.log('===> ', resp['result'])
      this.navItems = resp['result']
      this.navItems.sort((a, b) => { return a.sequenceNo - b.sequenceNo });
      // console.log('updated List ==>', this.navItems)
    })

  }
  getHorizontalMenu(role) {
    this.appService.getHorizontalMenu(role).subscribe(resp => {
      // console.log('===> ', resp['result'])
      this.navbarItems = resp['result']
      console.log('his.navbarItems', this.navbarItems)
      this.navbarItems.sort((a, b) => { return a.sequenceNo - b.sequenceNo });
      // console.log('updated List ==>', this.navbarItems)
    })
  }
}
