import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerList: Customer[] = [];

  newCustomerForm: FormGroup;

  ngOnInit(): void {
    this.getAll();
    this.newCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.pattern(/\d{9}(\d{3})?/)]),
      phoneNumber: new FormControl('', [Validators.pattern(/^([(]84[)][+]|0)9[0-1]\d{7}$/)]),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  getAll() {
    this.customerList = this.customerService.getAll();
  }


  checkAge(control: AbstractControl) {
    return (new Date().getFullYear()) - new Date(control.value).getFullYear() >= 18 ? null : {ageError: true};
  }

  onSubmit() {
    const customer = this.newCustomerForm.value;
    this.customerService.saveCustomer(customer);
    this.newCustomerForm.reset();
  }


}
