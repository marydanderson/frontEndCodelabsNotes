import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicBorder]'
})
export class BasicBorderDirective implements OnInit {

// getting access to the element we put the directive on
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    // changinge the styles on our element
    this.elRef.nativeElement.style.border = "4px solid black";
  }

}
