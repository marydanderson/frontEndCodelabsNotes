
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Output } from '@angular/core';



@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective  {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  // Listern for document click event which occurs whenever someone clicks anywhere in the DOM
  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
      // check if this click was inside the element where the directive is attached to using contains
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit()
    }
  }

}

