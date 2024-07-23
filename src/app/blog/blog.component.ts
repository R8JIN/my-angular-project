import { Component } from '@angular/core';
import { CustomColorDirective } from '../attribute-directives/custom-color.directive';
import { CustomTextDirective } from '../attribute-directives/blog/custom-text.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CustomColorDirective, CustomTextDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  color=''
  textSize=''
  
}
