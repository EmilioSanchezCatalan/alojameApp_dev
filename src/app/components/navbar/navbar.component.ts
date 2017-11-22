import { Component, OnInit } from '@angular/core';
import { trigger, state,  style, animate, transition } from '@angular/animations';

@Component({
  selector: 'alo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        left: '0'
      })),
      state('out', style({
        left: '-250px'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  public isDisplaySideNav: boolean;
  public sidenavState: string;
  constructor() {
    this.sidenavState = 'out';
    this.isDisplaySideNav = false;
  }

  ngOnInit() {
  }

  public openSideNav() {
    this.isDisplaySideNav = true;
    this.sidenavState = 'in';
  }
  public closeSideNav() {
    this.sidenavState = 'out';
    setTimeout( () =>{
      this.isDisplaySideNav = false;
    }, 505);
  }
}
