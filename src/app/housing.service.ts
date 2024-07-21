import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HousingLocation} from './housing-location/housinglocation'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
//      url = 'http://localhost:3000/locations';
     url = 'http://localhost:8080/locations';
     

    async getAllHousingLocations(): Promise<HousingLocation[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
      }
    
    constructor() {}

    async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return (await data.json()) ?? {};
    }

   submitApplication(firstName: string, lastName: string, email: string) {
      
      const headers = { 'content-type': 'application/json'};
      const body = {'firstName': firstName, 'lastName': lastName, 'email': 'email'};
      console.log(
        `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
      );
      // return this.http.post('http://localhost:8080/api/buyer', body, {'headers': headers});
    }

}
