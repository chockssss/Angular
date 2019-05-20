import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animationsample1',
  templateUrl: './animationsample1.component.html',
  styleUrls: ['./animationsample1.component.css'],
  animations: [
    trigger("AnimateParagraph", [state("one", style({
      color:'red',
      transform:'scale(1)',
      letterSpacing: '10px'
    })),
    state("two", style({
      color:'blue',
      transform:'scale(2)',
      letterSpacing: '0px'
    })),
    transition('one <-> two', animate('2000ms ease-in'))])
  ]
})
export class Animationsample1Component implements OnInit {

  mySate = "two"

  constructor() { }

  ngOnInit() {
  }

  TriggerAnimation = function(){
    this.mySate = this.mySate === "two" ? "one" : "two"
  }

}
