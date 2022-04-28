import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Inject, Output } from '@angular/core';
import { filter } from 'rxjs';
import { fromEvent } from 'rxjs';


@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective  {

  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) { }



}

