import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-comsume-child1',
  templateUrl: './comsume-child1.component.html',
  styleUrls: ['./comsume-child1.component.css']
})
export class ComsumeChild1Component implements OnInit {

  constructor(private local:LocalService) { }

  banks:any;

  ngOnInit() {
    this.local.addBank();
    this.banks = this.local.banks;
  }

}
