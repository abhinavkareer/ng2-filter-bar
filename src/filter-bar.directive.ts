import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngFilterBarDirective]'
})
export class NGFilterBarDirective {

  constructor(private el: ElementRef) {
  }

}
