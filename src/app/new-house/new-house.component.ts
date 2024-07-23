import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-new-house',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ApplicantsComponent],
  templateUrl: './new-house.component.html',
  styleUrl: './new-house.component.css'
})
export class NewHouseComponent {

  housingService = inject(HousingService)
  private housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    photo: new FormControl(),
    availableUnits: new FormControl(),
    wifi: new FormControl(),
    laundry: new FormControl()
  })

  submitApplication(){
    console.log("The name of the house is: ", this.applyForm.value.name);
    console.log("The wifi available is: ", this.applyForm.value.wifi)

    const formValues = this.applyForm.value;
    const housingLocationData: HousingLocation = {
      id: formValues.id,
      name: formValues.name,
      city: formValues.city,
      state: formValues.state,
      photo: formValues.photo,
      availableUnits: formValues.availableUnits,
      wifi: formValues.wifi,
      laundry: formValues.laundry
    };
    console.log("The available units are:",  housingLocationData);
    this.housingService.submitNewHouse(housingLocationData).subscribe(
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
