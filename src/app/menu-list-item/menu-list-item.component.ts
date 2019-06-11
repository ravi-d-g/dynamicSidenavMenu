import { Component, HostBinding, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppService } from '../app.service';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  routerLink?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  @Input() closeAllSubMenu: boolean


  @Output()
  clickCloseMenu: EventEmitter<any> = new EventEmitter();
  @Output()
  clickOpenMenu: EventEmitter<any> = new EventEmitter();

  constructor(
    public navService: AppService,
    public router: Router
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.routerLink && url) {
        // console.log(`Checking '/${this.item.routerLink}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.routerLink}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.routerLink} is expanded: ${this.expanded}`);
      }
    });

  }
  ngOnChanges() {
    this.closeAllSubMenu
    console.log('this.closeAllSubMenu', this.closeAllSubMenu)
    this.expanded = !this.closeAllSubMenu
  }

  onItemSelected(item: NavItem) {
    // console.log('item', item)


    if (!item.children || !item.children.length) {
      this.router.navigate([item.routerLink]);
      console.log('test')

      // this.clickCloseMenu.emit(true)
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      console.log('test 1')
      this.clickOpenMenu.emit(true)

    }
  }



  clickMenu(event) {
    console.log('event', event)

    this.clickCloseMenu.emit(true)

  }
}
