import {Routes} from '@angular/router';
import {HouseComponent} from './house/house.component';
import {DetailsComponent} from './details/details.component';

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
];
export default routeConfig;
