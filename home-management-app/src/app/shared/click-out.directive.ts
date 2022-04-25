import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() public clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])

  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.cotains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event)
    }
  }

}
