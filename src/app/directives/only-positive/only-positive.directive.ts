import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appOnlyPositive]'
})
export class OnlyPositiveDirective {

  private __nativeElement: HTMLInputElement;

  constructor(
    private el: ElementRef
  ) {
    this.__nativeElement = this.el.nativeElement;
  }

  @HostListener('keyup') checkValue() {
    console.log(this.__nativeElement.value);
    if (parseFloat(this.__nativeElement.value) < 0 || this.__nativeElement.value === '' || !this.__nativeElement.value) {
      this.__nativeElement.value = '';
    }
  }
}
