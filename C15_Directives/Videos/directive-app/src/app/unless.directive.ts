import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { //this is a property still, but the method executes when the property changes
    if (!condition) { //if condition is not true
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }

  constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
