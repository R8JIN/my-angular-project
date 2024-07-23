import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
  standalone: true
})
export class CustomColorDirective {

  @Input('appCustomColor') customColor: string | undefined;
  private isSelected = false;
  constructor(private el: ElementRef) { }

  @HostListener('change') onChange() {
    if(this.isSelected){
      this.highlight(this.customColor || 'white');
    }
  }

  @HostListener('click') onClick() {
    this.isSelected = true;  // Mark as selected when clicked
  }

  private highlight(color: string) {
    document.body.style.backgroundColor = color;
    if(this.customColor=='black'){
      document.body.style.color = 'white';
    }
    else{
      document.body.style.color = 'black';
    }
  }

}
