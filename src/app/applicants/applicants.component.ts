import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Buyer } from '../buyer';
import { CommonModule } from '@angular/common';
import { CustomDirective } from '../attribute-directives/custom.directive';

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule, CustomDirective],
  template: `<section class="listing-features">
              <ul>
                <li appCustom  (mouseover)="sendMessage(buyer.firstName)" >{{ buyer.firstName }} {{ buyer.lastName }}</li>
               
              </ul>
                </section>`,
  styleUrls: ['../details/details.component.css']
})
export class ApplicantsComponent {

  @Input() buyer!: Buyer;
  @Output() message = new EventEmitter<string>();

  sendMessage(firstName:String) {
    this.message.emit('Hovered over the name ' + firstName);
  }
}
