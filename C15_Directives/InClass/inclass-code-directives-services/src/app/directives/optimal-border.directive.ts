import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOptimalBorder]'
})
export class OptimalBorderDirective implements OnInit{
  @Input() defaultBorder: string = '4px solid white';
  @Input() customBorder: string = '4px solid gold';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, "border", "4px solid gold");
  }

  @HostListener("mouseenter") mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, "border", this.customBorder)
  }

  @HostListener("mouseleave") mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, "border", this.defaultBorder)
  }

}
