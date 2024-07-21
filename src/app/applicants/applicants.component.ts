import { Component, inject, Input } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Buyer } from '../buyer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="listing-features">
              <ul>
                <li>{{ buyer.firstName }} {{ buyer.lastName }}</li>
              </ul>
                </section>`,
  styleUrls: ['../details/details.component.css']
})
export class ApplicantsComponent {

  @Input() buyer!: Buyer;
}
