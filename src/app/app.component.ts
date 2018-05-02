import { Component , OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

  public isloading: boolean;
  public userType: string;
  public changeUsertype: boolean;

  constructor(
    private __router: Router,
    private __cdrf: ChangeDetectorRef
  ) {
    __router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    localStorage.setItem('userType', 'student');
    this.changeUsertype = false;
    this.userType = localStorage.getItem('userType');
  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
  ngOnDestroy() {
    this.__cdrf.detectChanges();
  }

  /**
   * Control the state of the navigation
   * @param {RouterEvent} event event of change route
   */
  private  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isloading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isloading = false;
    }
  }

  /**
   * Set the userType into the localStorage
   */
  public setInStorage(): void {
    localStorage.setItem('userType', this.userType);
  }

  /**
   * active the box for change the type of user
   */
  public activeChange(): void {
    this.changeUsertype = this.changeUsertype === false ? true : false;
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    }, 25);
  }
}
