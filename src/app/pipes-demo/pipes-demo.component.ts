import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  money = "100";
  name ="Chocka";
  CurrentDate = new Date;

}
