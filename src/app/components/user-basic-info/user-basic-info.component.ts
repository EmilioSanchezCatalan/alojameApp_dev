/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the profile of a student
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent {

  @Input() function: string;
  constructor() {
    this.function = 'none';
  }

}
