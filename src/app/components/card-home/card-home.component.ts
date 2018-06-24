/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Show a home specifications in a card format
 * Inputs:
 *    --> function: defined the CardHomes's functionality
 *              - none: no functionality
 *              - crud: functionality crud
 *              - subs: functionality of subscription
 *    --> home: home information for complete the card-home
 * Outputs:
 *    --> removed: emmit a event when the home is deleted
 */
import { Component, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { ItemHome } from '../../interfaces/homes';
import { HomeCrudService } from '../../services/home-crud.service';
import { NotificationHttpService } from '../../services/notification-http.service';

declare var $: any;

@Component({
  selector: 'alo-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class CardHomeComponent implements AfterViewInit {

  @Input() function: string;
  @Input() home: ItemHome;
  @Output() removed: EventEmitter<any>;

  constructor(
    private __router: Router,
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService
  ) {
    this.function = 'none';
    this.removed = new EventEmitter();
  }

  ngAfterViewInit() {
    $('.rating').rating('create');
  }

  public gotoHome(): void {
    if (this.function === 'none') {

      switch (localStorage.getItem('userType')) {

        case 'student':
          this.__router.navigate(['private/student', 'home']);
          break;
        case 'public':
          this.__router.navigate(['public', 'home']);
          break;
        case 'owner':
          this.__router.navigate(['public', 'home']);
          break;
      }
    }
  }

  /**
   * Navigate to the view home-detail of the home selectedç
   * @param {number}  homes_id id of the home to show
   */
  public gotoShowHome(homes_id: number): void {
    if (this.function === 'crud') {
      this.__router.navigate(['private/owner', 'own-home', 'show', homes_id]);
    } else {
      this.__router.navigate(['private/student', 'std-home']);
    }
  }

  /**
   * Navigate to the view students for make the control of the roomers
   */
  public gotoStudentsHome(): void {
    this.__router.navigate(['private/owner', 'own-home', 'students']);
  }

  /**
   * Navigate to the view edit home configuration
   * @param {number} homes_id id of the home to edit
   */
  public gotoEditHome(homes_id: number): void {
    this.__router.navigate(['private/owner', 'own-home', 'edit', homes_id]);
  }

  /**
   * Remove the home.
   * @param homes_id [description]
   */
  public deleteHome(homes_id: number): void {
    let confirmation = confirm('¿Esta usted seguro que desea borrar este piso?');
    if (confirmation) {
      this.__homeCrud.delete(homes_id)
        .then( response => {
          this.__notfHttp.show(response);
          this.removed.emit();
        }).catch ( error => {
          this.__notfHttp.show(error);
        });
    }
  }
}
