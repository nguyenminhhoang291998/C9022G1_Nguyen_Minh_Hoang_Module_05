import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [
    {
      id: 1,
      customer: {
        customerName: 'Nguyễn Thị Hào '
      },
      facility: {
        name: 'Villa beach front'
      },
      startDate: '2023/09/08',
      endDate: '2023/09/12',
      deposit: 200000
    },
    {
      id: 1,
      customer: {
        customerName: 'Phạm Xuân Diệu'
      },
      facility: {
        name: 'House princess 02'
      },
      startDate: '2023/09/08',
      endDate: '2023/09/12',
      deposit: 300000
    },
    {
      id: 1,
      customer: {
        customerName: 'Trương Đình Nghệ'
      },
      facility: {
        name: 'Room twin 02'
      },
      startDate: '2023/09/08',
      endDate: '2023/09/12',
      deposit: 100000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}
