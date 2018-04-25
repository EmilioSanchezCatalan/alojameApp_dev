/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: create a remove the customs rules
 */
import { Component } from '@angular/core';

import { FormCustomRules } from '../../interfaces/form-custom-rules';

declare var $: any;

@Component({
  selector: 'alo-form-new-rule',
  templateUrl: './form-new-rule.component.html',
  styleUrls: ['./form-new-rule.component.css']
})
export class FormNewRuleComponent {

  public listRules: FormCustomRules;

  constructor() {
    this.listRules = {
      items: []
    };
  }

  /**
   * Set switch the font effect on fa-minus button
   * @param {HTMLFontElement} tagI font fa-minus that is going to have the effect
   */
  public fontMinusHoverEffect( tagI: HTMLFontElement): void {
    if ( !$(tagI).hasClass('minus-disabled') ) {
      $(tagI).toggleClass('fa-minus-square-o fa-minus-square');
    }
  }

  /**
   * Set switch the font effect on fa-plus button
   * @param {HTMLFontElement} tagI font fa-plus that is going to have the effect
   */
  public fontPlusHoverEffect( tagI: HTMLFontElement): void {
    if ( !$(tagI).hasClass('plus-disabled') ) {
      $(tagI).toggleClass('fa-plus-square-o fa-plus-square');
    }
  }

  /**
   * Create a list of rules that is going to print
   * @return {Array<number>} list of range
   */
  public rangeListRules(): Array<number> {
    let range: Array<number> = [];
    for (let i = 0; i < this.listRules.items.length + 1; i++) {
      range.push(i);
    }
    return range;
  }

  /**
   * Add a new rule into the listRules
   * @param {HTMLFontElement} tagI font element fa-plus that is going to have the effect
   */
  public addNewRule(tagI: HTMLFontElement): void {
    if ( !$(tagI).hasClass('plus-disabled') ) {
      this.listRules.items.push(
        {
          rule: '',
          type: 'P'
        }
      );
    }
  }

  /**
   * Remove a rule in a position
   * @param {number}          pos  postion in the array of the element that we are going to delete
   */
  public removeRule( pos: number): void {
    this.listRules.items.splice(pos, 1);
  }

  /**
   * Change the type of rule Comunity (C) or Owner (P)
   * @param {number} pos position in the array listRules of the element that is going to change
   *                     the status
   */
  public changeTypeRule(pos: number): void {
    this.listRules.items[pos].type = this.listRules.items[pos].type === 'P' ? 'C' : 'P';
  }
}
