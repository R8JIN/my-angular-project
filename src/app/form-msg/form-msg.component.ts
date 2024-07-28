import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-msg.component.html',
  styleUrl: './form-msg.component.css'
})
export class FormMsgComponent {
  @Input() successMessage: string = '';
  @Input() errorMessage: string = '';
}
