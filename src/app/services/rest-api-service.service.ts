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

  getEmployeeDetails(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  }

  getEmployeebyID(id){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employee/" + id)
  }

  deleteEmployeeByID(id){
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/" + id)
  }

  addEmployee(employee){
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", employee)
  }

}
