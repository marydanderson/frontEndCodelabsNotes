import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, renderer: Renderer2) { }

  //When 'isOpen' switches to true, this will be added; and when it's false, it will be removed
  @HostBinding("class.show") isOpen = false;

  @HostListener('click') toggleOpen() {
    //toggleOpen method that activiates when atrributed element is clicked
    this.isOpen = !this.isOpen;

    //grab the dropdown-menu div
    let dropdownList = this.elRef.nativeElement.querySelector(".dropdown-menu");

    if (this.isOpen) {
      this
    }

    //show dropdown menu; which is div class of show

  }

}
