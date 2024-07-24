import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlogHighlight]',
  standalone: true
})
export class BlogHighlightDirective {

  
  constructor(private el: ElementRef) { }

  @Input() defaultColor = '';
  @Input() appBlogHighlight = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appBlogHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
    // this.el.nativeElement.style.borderRadius = '28px';

  }

}
