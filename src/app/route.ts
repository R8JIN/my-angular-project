import {Routes} from '@angular/router';
import {HouseComponent} from './house/house.component';
import {DetailsComponent} from './details/details.component';
import { NewHouseComponent } from './new-house/new-house.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HouseComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path:'new-form',
    component: NewHouseComponent,
    title: 'New House',
  }
];
export default routeConfig;
