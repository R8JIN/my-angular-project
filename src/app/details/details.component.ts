import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Subscription } from 'rxjs';
import { Buyer } from '../buyer';
import { ApplicantsComponent } from '../applicants/applicants.component';

import { CustomIfDirective } from '../custom-if.directive';
import { HighlightDirective } from '../attribute-directives/highlight.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, 
    FormsModule, ApplicantsComponent, HighlightDirective, CustomIfDirective],
  template: `
    <article>
    <div class="px-2">

      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <div class="--bs-primary-text-emphasis"><h1>{{ housingLocation?.name }}</h1></div>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (ngSubmit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit"  class="btn btn-primary">Apply now</button>
        </form>
      </section>
      <section class="listing-features">
        
        <h3 class="section-heading" *appCustomIf="showMessage">Applicants ({{buyerList.length}})</h3>
        <app-applicants (message)="receiveMessage($event)" *ngFor="let buyer of buyerList" [buyer]="buyer"></app-applicants>
        <p>{{ receivedMessage }}</p>
      </section>
    </div>
    </article>
  `,
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {



  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  buyerService = inject(BuyerService);
  buyerList:Buyer[] = [];
  showMessage = false;
  color = '';

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  housingLocation: HousingLocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      })
      .catch((error) => {
        console.error('Error fetching housing location', error);
      });
    
  }

  constructor(){
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.buyerService.getBuyerByHousingLocation(housingLocationId).then((buyerList: Buyer[]) => {
      this.buyerList = buyerList;
      console.log("The applicants are: ", buyerList);
      if(buyerList.length !=0){
        this.showMessage = true;
      }
    });
  }

  receivedMessage = '';
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

  submitApplication() {
    {
      let housingLocationId =  parseInt(this.route.snapshot.params['id'],10)
      console.log("The housing location Id: ", housingLocationId);
      this.buyerService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
        String(housingLocationId),
      ).subscribe(
        response => {
          console.log('Application submitted successfully', response);
          alert('Application Submitted Successfully!');
          this.applyForm.reset()
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    }
  }
}


