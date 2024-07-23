import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor = '';
  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.borderRadius = '28px';

  }
}
