import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comsume-parent',
  templateUrl: './comsume-parent.component.html',
  styleUrls: ['./comsume-parent.component.css']
})
export class ComsumeParentComponent implements OnInit {

  constructor() { }

  NameOfCity = "Chennai"

  ngOnInit() {
  }

  receivedNewName = function(e){
    this.NameOfCity = e;
  }

}
