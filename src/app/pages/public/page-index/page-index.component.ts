/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: index page witch represent a landing of the web
 */
import { Component, OnInit } from '@angular/core';

import { HomePublicService } from '../../../services/home-public.service';
import { BrowserAddress } from '../../../interfaces/browser-address';

@Component({
  selector: 'page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css'],
  providers: [HomePublicService]
})
export class PageIndexComponent {

  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public listAddressAvaliable: BrowserAddress;

  constructor(
    private __homePublic: HomePublicService
  ) {
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
}
