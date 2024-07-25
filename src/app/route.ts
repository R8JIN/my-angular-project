import {Routes} from '@angular/router';
import {HouseComponent} from './house/house.component';
import {DetailsComponent} from './details/details.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './custom-pipes/new-blog/new-blog.component';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SetCookieComponent } from './set-cookie/set-cookie.component';
import { GetCookieComponent } from './get-cookie/get-cookie.component';

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
    component: AllBlogComponent,
    title: 'Blog'
  },
  {
    path:'read-blog/:id',
    component: BlogComponent,
    title: 'Read Blog'
  },
  {
    path:'write-blog',
    component: NewBlogComponent,
    title: 'Write Blog'
  },
  {
    path:'not-found',
    component: NotFoundComponent,
    title: 'Not Found'
  },
  {
    path: 'set-cookie',
    component: SetCookieComponent,
    title: 'Set Cookie'
  },
  {
    path: 'get-cookie',
    component: GetCookieComponent,
    title: 'Get Cookie'
  },

];
export default routeConfig;
