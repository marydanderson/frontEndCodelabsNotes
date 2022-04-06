import { Directive, ElementRef, Host, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @Input() highlightFontSize: string = '35px';
  @Input() defaultFontSize: string = '10px';

  @HostBinding('style.backgroundColor') backgroundColor: string='';
  @HostBinding('style.fontSize') fontSize: string = '10px';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { //mouseenter is an event listener builtin to DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    this.fontSize = this.highlightFontSize;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.fontSize = this.defaultFontSize;

  }
}
