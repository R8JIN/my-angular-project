import { Component, OnInit } from '@angular/core';
import { HouseComponent} from './house/house.component';
import {RouterModule} from '@angular/router';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { interval, map, Observable } from 'rxjs';
import { NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HouseComponent,RouterModule, CommonModule, NgxEditorModule],
  template: `

    <main>
      <div class="container">
        <div class="row m-2">
          <div class="col d-flex justify-content-center">
            <a [routerLink]="['/']">
              <header class="brand-name">
                <div>
                  <h3>
                    <i class="fa-solid fa-home"> Home </i> 
                  </h3>
                </div>
                </header>
            </a>
          </div> 
          <hr>
        </div>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </div>
    </main>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-angular-project';

}
