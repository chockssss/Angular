import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from 'src/app/services/rest-api-service.service';

@Component({
  selector: 'app-rest-api-sample1',
  templateUrl: './rest-api-sample1.component.html',
  styleUrls: ['./rest-api-sample1.component.css']
})
export class RestApiSample1Component implements OnInit {

  constructor(private restAPI:RestApiServiceService) { }

  users:any

  ngOnInit() {
    this.restAPI.getRemoteUsers().subscribe((response)=>{
      console.log(response)
      this.users = response
      console.log(this.users)
    }, function(error){
      console.log(error)
    })
  } 

}
