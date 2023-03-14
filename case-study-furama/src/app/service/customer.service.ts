import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id: 'KH-0001',
      name: 'Nguyễn Thị Hào',
      dayOfBirth: '1970-11-07',
      gender: false,
      idCard: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: 1
    },
    {
      id: 'KH-0002',
      name: 'Phạm Xuân Diệu',
      dayOfBirth: '1970-11-07',
      gender: true,
      idCard: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: 2
    },
    {
      id: 'KH-0003',
      name: 'Trương Đình Nghệ',
      dayOfBirth: '1970-11-07',
      gender: true,
      idCard: '488645199',
      phoneNumber: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: 3
    }
  ];

  constructor() {
  }

  getAll() {
    return this.customerList;
  }

  findCustomerById(id: string) {
    return this.customerList.find(item => item.id === id);
  }

  saveCustomer(customer: Customer) {
    this.customerList.push(customer);
  }

  updateCustomer(customer: Customer) {
    const index = this.customerList.findIndex(item => item.id === customer.id);
    if (index !== -1) {
      this.customerList.splice(index, 1, customer);
    }
  }

  deleteCustomer(id: string) {
    const index = this.customerList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.customerList.splice(index, 1);
    }
  }

}
