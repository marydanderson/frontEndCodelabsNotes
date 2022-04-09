import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}


// Goals:
// 1) directive can add certain CSS class to the elmeent it sits on once it's clicked;
// and remove class once its clicked again.
// attach to

//host listener @ host binding
