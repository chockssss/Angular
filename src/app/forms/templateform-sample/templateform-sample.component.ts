import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform-sample',
  templateUrl: './templateform-sample.component.html',
  styleUrls: ['./templateform-sample.component.css']
})
export class TemplateformSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SubmitDetails = function(hf){
    console.log(hf);
    console.log(JSON.stringify(hf.value));
    console.log("Form Valid Status : " + JSON.stringify(hf.valid));
    console.log("Form inValid Status : " + JSON.stringify(hf.inValid));
  }

}
