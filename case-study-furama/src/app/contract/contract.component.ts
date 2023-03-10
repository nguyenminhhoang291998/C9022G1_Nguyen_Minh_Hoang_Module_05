import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[];
  constructor() { }

  ngOnInit(): void {
    // this.contractList = [{
    //   id: 1,
    //   customer: {
    //     name: 'Nguyễn Văn '
    //   }
    //   facility:
    //   startDate:
    //   endDate:
    //   deposit:
    // }]
  }

}
