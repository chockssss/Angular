import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-sample',
  templateUrl: './reactiveform-sample.component.html',
  styleUrls: ['./reactiveform-sample.component.css']
})
export class ReactiveformSampleComponent implements OnInit {

  constructor() { }

  myForm:any;

  ngOnInit() {
    this.myForm = new FormGroup({
      fullname: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      age: new FormControl("", this.ageValidator),
      hobby: new FormControl()
    }
    )
  }

  ageValidator = function(control)
  {
    console.log(control);
    if (control.value < 10){
      return {'age': true};
    }
  }

  SubmitDetails(e){
    console.log(e)
  }

}
