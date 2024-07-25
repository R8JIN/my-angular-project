import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  private apiUrl = "http://localhost:8080/api/v1/blog";
  constructor(private http:HttpClient) { }

  addBlog(title:string, author:string, content:string){
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { 'title':title, 'author': author, 'content':content};


    return this.http.post(this.apiUrl, JSON.stringify(body), {headers});
  }

  async getAllHousingLocations(): Promise<Blog[]> {
      const data = await fetch(this.apiUrl);
      return (await data.json()) ?? [];
    }

    async getById(id: number): Promise<Blog | undefined>{
      const data = await fetch(`${this.apiUrl}/${id}`);
      console.log("The data is", data);
      return (await data.json()) ?? {};

    }

}
