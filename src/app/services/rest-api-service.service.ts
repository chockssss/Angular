import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  constructor(private http:HttpClient) { }

  getRemoteUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}
