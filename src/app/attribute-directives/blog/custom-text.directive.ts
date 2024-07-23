import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomText]',
  standalone: true
})
export class CustomTextDirective {

  @Input('appCustomText') customTextSize: string | undefined;
  
  constructor(private el:ElementRef) { }

  @HostListener('change') onChange(){
    this.textChange(this.customTextSize || 'medium')
  }

  private textChange(textSize: string){
   
    this.el.nativeElement.style.fontSize = textSize;
  }
}
