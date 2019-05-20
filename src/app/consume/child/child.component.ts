import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() CityName
  @Output() sendToParent = new EventEmitter()

  ngOnInit() {
  }

  exposeNewName = function(){
    this.sendToParent.emit(this.CityName)
  }

}
