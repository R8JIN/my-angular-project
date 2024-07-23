import { Component } from '@angular/core';
import { CustomColorDirective } from '../attribute-directives/custom-color.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CustomColorDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  color=''
}
