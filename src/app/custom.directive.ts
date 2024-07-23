import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.bold(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bold(false);
  }

  private bold(isBold: boolean) {
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', isBold ? 'bold' : 'normal');
  }
}
