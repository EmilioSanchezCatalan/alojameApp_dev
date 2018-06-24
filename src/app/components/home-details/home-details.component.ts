/**
 * @author Emilio Sánchez Catalán
 * Purpose: show the properties of a home
 * Inputs:
 *    --> homeInfo: the information about the home
 */
import { Component, Input } from '@angular/core';

import { HomesFull } from '../../interfaces/homes';

@Component({
  selector: 'alo-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent {

  @Input() homeInfo: HomesFull;

  constructor() { }
}
