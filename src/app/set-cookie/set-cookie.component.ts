import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from '../service/cookie/cookie.service';

@Component({
  selector: 'app-set-cookie',
  standalone: true,
  imports: [],
  templateUrl: './set-cookie.component.html',
  styleUrl: './set-cookie.component.css'
})
export class SetCookieComponent implements OnInit{
  cookieService = inject(CookieService)

  ngOnInit(){
    this.cookieService.setCookie({
      name: 'user',
      value: 'Readerstack',
      session: true,
    });
  }
}
