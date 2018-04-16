/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show a toolbar for go to the diferents routes of the student dashboard
 * Inputs:
 *    --> where: indicate where section we are.
 *            - my-home: actual home selected.
 *            - subs-homes: list of homes subscribes.
 *            - messages: the message section.
 *            - valorations: the valorations section.
 */

import { Component, Input} from '@angular/core';

@Component({
  selector: 'alo-toolbar-student',
  templateUrl: './toolbar-student.component.html',
  styleUrls: ['./toolbar-student.component.css']
})
export class ToolbarStudentComponent {

  @Input() where: string;

  constructor() { }
}
