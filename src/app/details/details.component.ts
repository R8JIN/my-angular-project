import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Observable, Subscription } from 'rxjs';
import { Buyer } from '../buyer';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { Router } from '@angular/router';
import { CustomIfDirective } from '../custom-if.directive';
import { HighlightDirective } from '../attribute-directives/highlight.directive';
import { FormMsgComponent } from '../form-msg/form-msg.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, 
    FormsModule, ApplicantsComponent, HighlightDirective, CustomIfDirective, FormMsgComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {



  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  buyerService = inject(BuyerService);

  private housingLocationId:any;
  buyerList:Buyer[] = [];
  color = '';
  buyers$!: Observable<any>;

  showMessage = false;

  successMessage = '';
  errorMessage = '';
  
  

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  housingLocation: HousingLocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private router: Router){
    this.housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

  }

  ngOnInit() {

    this.housingService.getHousingLocationById(this.housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      })
      .catch((error) => {
        console.error('Error fetching housing location', error);
      });
      this.buyers$ = this.buyerService.getBuyers(this.housingLocationId);
      this.getBuyerByHousingLocation();

  }

  receivedMessage = '';
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

  submitApplication() {
      console.log("The housing location Id: ",this.housingLocationId);

      if(this.applyForm.valid){

        this.buyerService.submitApplication(
          this.applyForm.value.firstName ?? '',
          this.applyForm.value.lastName ?? '',
          this.applyForm.value.email ?? '',
          String(this.housingLocationId),
        ).subscribe(
          response => {
      
            console.log("The url", this.router.url)

            this.getBuyerByHousingLocation();
            this.applyForm.reset();
            
            this.successMessage = "Application Submitted";
            setTimeout(() => this.successMessage='', 3000);
            this.router.navigate([this.router.url]);
          },
          error => {
            console.error('Error submitting application', error);
            this.errorMessage = error.message;
            
          }
        ); 
    }
    else{
      
      this.errorMessage = "Fill up the form";
      setTimeout(() => this.errorMessage='', 3000);
      
    }
  }

  getBuyerByHousingLocation(){
    this.buyerService.getBuyerByHousingLocation(this.housingLocationId).then((buyerList: Buyer[]) => {
      this.buyerList = buyerList;
      console.log("The applicants are: ", buyerList);
      if(buyerList.length !=0){
        this.showMessage = true;
      }
    });
  }
}


