import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from 'src/app/services/rest-api-service.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-rest-api-sample1',
  templateUrl: './rest-api-sample1.component.html',
  styleUrls: ['./rest-api-sample1.component.css']
})
export class RestApiSample1Component implements OnInit {

  constructor(private restAPI: RestApiServiceService, private myRouter: Router) { }

  users: any
  employee: any
  newemployee: any
  name: string
  age: string
  salary: string

  ngOnInit() {
    this.restAPI.getRemoteUsers().subscribe((response) => {
      console.log(response)
      this.users = response
      console.log(this.users)
    }, function (error) {
      console.log(error)
    })

  }

  getEmployeeDetails() {
    this.restAPI.getEmployeeDetails().subscribe((response) => {
      console.log(response)
      this.employee = response
    }, function (error) {
      console.log(error)
    })
  }

  getEmployeeByID(id) {
    /*console.log(id)
    this.restAPI.getEmployeebyID(id).subscribe((response) => {
      console.log(response)
    }, function (error) {
      console.log(error)
    })*/
    this.myRouter.navigate(["/employeeDetails", id])
  }

  deleteEmployeeByID(id) {
    this.restAPI.deleteEmployeeByID(id).subscribe((response) => {
      console.log(response)
      this.getEmployeeDetails()
    })
  }

  addEmployee() {

    this.newemployee = {
      "name": this.name,
      "salary": this.salary,
      "age": this.age
    }
    console.log(this.newemployee)

    this.restAPI.addEmployee(this.newemployee).subscribe((response)=>{
      console.log(response)
      this.getEmployeeDetails()
    })
  }

}
