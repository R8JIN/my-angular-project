import {RouterModule} from '@angular/router';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
import { HighlightDirective } from '../attribute-directives/highlight.directive';


@Component({
  selector: 'app-house',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule, HighlightDirective],
  template: `
      <section>
        <div class="row">
          <div class="col-md-5">
          <form>
            <div class="input-group m-1 p-1">
              <input class="form-control" type="text" placeholder="Filter by city"  aria-describedby="button-addon1" #filter />
              <button class="btn btn-primary" type="button" (click)="filterResults(filter.value)" id="button-addon1">Search</button>
            </div>
          </form>
          </div>
        </div>

          <div class="row m-2">
            <div class="col-sm-1">
                <a [routerLink]="['/new-form']" class="no-underline">
                  <i class="fa-solid fa-plus"> Add New House</i>
                </a>
            </div>
            <div class="col-sm-1">
              <a [routerLink]="['/blog']" class="no-underline">
                <i class="fa-solid fa-blog"> Read Blog</i>
              </a>
            </div>
            <div class="col-sm-1">
              <a [routerLink]="['/write-blog']" class="no-underline">
                <i class="fa-solid fa-blog"> Write Blog</i>
              </a>
            </div>
          </div>
      
      </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList"
       [housingLocation]="housingLocation" [appHighlight]="'lightblue'"></app-housing-location>
    </section>

`,
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

 constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
