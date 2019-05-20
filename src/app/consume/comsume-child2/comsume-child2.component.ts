import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-comsume-child2',
  templateUrl: './comsume-child2.component.html',
  styleUrls: ['./comsume-child2.component.css']
})
export class ComsumeChild2Component implements OnInit {

  constructor(private local2:LocalService) { }
 
  banks:any;

  ngOnInit() {
    this.local2.addBank();
    this.banks = this.local2.banks;
  }

}
