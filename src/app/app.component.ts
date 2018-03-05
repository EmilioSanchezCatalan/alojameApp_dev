import { Component , OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  public isloading: boolean;

  constructor(
    private __router: Router,
    private __cdrf: ChangeDetectorRef
  ) {
    __router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
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
}
