import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Subscription } from 'rxjs';
import { Buyer } from '../buyer';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { Router } from '@angular/router';
import { CustomIfDirective } from '../custom-if.directive';
import { HighlightDirective } from '../attribute-directives/highlight.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, 
    FormsModule, ApplicantsComponent, HighlightDirective, CustomIfDirective],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {



  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  buyerService = inject(BuyerService);
  buyerList:Buyer[] = [];
  showMessage = false;

  success = false;
  fail = false;
  
  color = '';

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  housingLocation: HousingLocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

  constructor(private router: Router){
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
      let housingLocationId =  parseInt(this.route.snapshot.params['id'],10)
      console.log("The housing location Id: ", housingLocationId);
      if(this.applyForm.valid){
      this.buyerService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
        String(housingLocationId),
      ).subscribe(
        response => {
     
          this.success = true;
          this.router.navigate([this.router.url]);
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    }
    else{
      this.fail = true;
    
    }
  }
}


