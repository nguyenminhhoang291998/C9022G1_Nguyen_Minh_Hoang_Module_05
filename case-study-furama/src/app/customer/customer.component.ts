import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];

  constructor() {
  }

  ngOnInit(): void {
    this.customerList = [
      {
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970/11/07',
        gender: false,
        idCard: '643431213',
        phoneNumber: '0945423362',
        email: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng'
      },
      {
        name: 'Phạm Xuân Diệu',
        dayOfBirth: '1992/08/08',
        gender: true,
        idCard: '865342123',
        phoneNumber: '0954333333',
        email: 'xuandieu92@gmail.com',
        address: 'K77/22 Thái Phiên, Quảng Trị'
      },
      {
        name: 'Trương Đình Nghệ',
        dayOfBirth: '1960/11/07',
        gender: true,
        idCard: '488645199',
        phoneNumber: '0373213122',
        email: 'nghenhan2702@gmail.com',
        address: 'K323/12 Ông Ích Khiêm, Vinh'
      }
    ];
  }

}
