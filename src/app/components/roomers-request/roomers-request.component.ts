/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the list of students request in order to be a roomers of that home
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../interfaces/user';
import { HomeCrudService } from '../../services/home-crud.service';
import { NotificationHttpService } from '../../services/notification-http.service';

@Component({
  selector: 'alo-roomers-request',
  templateUrl: './roomers-request.component.html',
  styleUrls: ['./roomers-request.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class RoomersRequestComponent {

  @Input() listUsers: Array<User>;
  @Output() change: EventEmitter<any>;
  public homes_id: number;

  constructor(
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService,
    private __activeRoute: ActivatedRoute,
    private __router: Router

  ) {
    this.change = new EventEmitter();
    this.__activeRoute.params.subscribe(params => {
      this.homes_id = params['homeId'];
    });
  }

  /**
   * Add the user like a roomer of the home selected
   * @param {number} users_id id of the user selected
   */
  public addUserLikeRoomer(users_id: number): void {
    this.__homeCrud.addRoomer(this.homes_id, users_id)
      .then(response => {
        this.__notfHttp.show(response);
        this.change.emit();
      }).catch(error => {
        this.__notfHttp.show(error);
      });
  }

  /**
   * rm the user on the subscription of the home
   * @param {number} users_id id of the user selected
   */
  public rmUserSubcription(users_id: number): void {
    this.__homeCrud.rmSubscription(this.homes_id, users_id)
      .then(response => {
        this.__notfHttp.show(response);
        this.change.emit();
      }).catch(error => {
        this.__notfHttp.show(error);
      });
  }

  /**
   * Go to the user profile view
   * @param {number} users_id id of the user selected
   */
  public gotoUserProfile(users_id: number): void {
    this.__router.navigate(['/private', 'owner', 'std-profile', 'show', users_id]);
  }

  /**
   * Go to send a message to the user
   * @param {number} users_id id of the user selected
   */
  public gotoSendMessage(users_id: number): void {
    this.__router.navigate(['/private', 'owner', 'own-message', users_id]);
  }
}
