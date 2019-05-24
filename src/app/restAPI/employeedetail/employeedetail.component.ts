import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from 'src/app/services/rest-api-service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private myActivatedRoute:ActivatedRoute, private restAPI:RestApiServiceService) { }

  activeID: any
  employeeDetails: any

  ngOnInit() {
    console.log(this.myActivatedRoute)
    this.activeID = this.myActivatedRoute.snapshot.params.id

    console.log(this.activeID)
    this.restAPI.getEmployeebyID(this.activeID).subscribe((response) => {
      console.log(response)
      this.employeeDetails = response
    }, function (error) {
      console.log(error)
    })

  }

}
