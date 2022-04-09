import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBgColo]'
})
export class RandomBgColoDirective implements OnInit {
  backgroundColor: string = 'transparenet';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.generateRandomColor())
  }

  generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
      color += letters[Math.floor(Math.random() *16)]
    }
    this.backgroundColor = color
    return this.backgroundColor;
  }





}
