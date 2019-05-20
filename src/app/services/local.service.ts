import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  myPI = 2.14;

  banks = ['ICICI', 'SBI', 'RBS', 'BOA'];

  displayBanks = function(){
    console.log(this.banks)
  }

  addBank = function(){
    this.banks.push('HDFC')
  }

}
