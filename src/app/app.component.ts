import { Component } from '@angular/core';
import { HouseComponent} from './house/house.component';
import {RouterModule} from '@angular/router';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HouseComponent,RouterModule, RouterModule,],
  template: `

    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <i class="fa-solid fa-home"> Home </i> 
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-angular-project';
}
