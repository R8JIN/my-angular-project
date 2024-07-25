import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from '../service/cookie/cookie.service';

@Component({
  selector: 'app-get-cookie',
  standalone: true,
  imports: [],
  templateUrl: './get-cookie.component.html',
  styleUrl: './get-cookie.component.css'
})
export class GetCookieComponent implements OnInit{

  cookie:string = '';
  cookieService = inject(CookieService)

  ngOnInit(){
    this.cookie = this.cookieService.getCookie('user');

  }

}
