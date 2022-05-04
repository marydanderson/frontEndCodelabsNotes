
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Output } from '@angular/core';



@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective  {


  constructor(private elementRef: ElementRef) { }



}

