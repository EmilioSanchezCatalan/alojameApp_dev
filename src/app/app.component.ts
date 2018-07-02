import { Component , OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';


import { HomePublicService } from './services/home-public.service';
import { BrowserAddress } from './interfaces/browser-address';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomePublicService]
})
export class AppComponent implements OnDestroy {

  public isloading: boolean;
  public userType: string;
  public changeUsertype: boolean;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public listAddressAvaliable: BrowserAddress;

  constructor(
    private __router: Router,
    private __cdrf: ChangeDetectorRef,
    private __homePublic: HomePublicService
  ) {
    __router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    this.changeUsertype = false;
    if (!localStorage.getItem('userType')) {
      localStorage.setItem('userType', 'public');
    }
    this.displaySpinner = true;
    this.isErrorLoading = false;
    this.__homePublic.getListOfAddress()
      .then(response => {
        this.displaySpinner = false;
        this.listAddressAvaliable = response;
      }).catch(error => {
        this.isErrorLoading = true;
      });
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
   * Get the userType saved on the localStorage
   * @return {string} the usertype count
   */
  public getLocalStorageUserType(): string {
    return localStorage.getItem('userType');
  }
}
