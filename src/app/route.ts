import {Routes} from '@angular/router';
import {HouseComponent} from './house/house.component';
import {DetailsComponent} from './details/details.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { BlogComponent } from './blog/blog.component';

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
  },
  {
    path:'blog',
    component: BlogComponent,
    title: 'Blog'
  }
];
export default routeConfig;
