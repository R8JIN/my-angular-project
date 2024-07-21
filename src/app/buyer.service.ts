import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  
  private apiUrl = 'http://localhost:8080/api/buyer'; // API endpoint

  constructor(private http: HttpClient) {}

  submitApplication(firstName: string, lastName: string, email: string, locationId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { 'locationId':locationId, 'firstName': firstName, 'lastName':lastName, 'email': email };

    console.log(`Buyers: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
    console.log("String data: ", JSON.stringify(body) )
    return this.http.post(this.apiUrl, JSON.stringify(body), { headers });
  }

}
