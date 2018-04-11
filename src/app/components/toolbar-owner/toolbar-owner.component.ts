/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show a toolbar for go to the diferents routes of the owner dashboard
 * Inputs:
 *    --> where: indicate where section we are.
 *            - homes: the home section
 *            - messages: the message section
 *            - valorations: the valorations section
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-toolbar-owner',
  templateUrl: './toolbar-owner.component.html',
  styleUrls: ['./toolbar-owner.component.css']
})
export class ToolbarOwnerComponent {

  @Input() where: string;

  constructor() { }
}
