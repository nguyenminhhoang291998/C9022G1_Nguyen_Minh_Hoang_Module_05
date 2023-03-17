import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  newCustomerForm: FormGroup;
  editCustomerForm: FormGroup;
  editCustomerId: number;
  editCustomer: Customer;
  deleteCustomerId: number;
  deleteCustomer: Customer;

  ngOnInit(): void {
    this.getAllCustomerType();
    this.getAll();
    this.newCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.pattern(/\d{9}(\d{3})?/), Validators.required]),
      phoneNumber: new FormControl('', [Validators.pattern(/^([(]84[)][+]|0)9[0-1]\d{7}$/), Validators.required]),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
    this.editCustomerForm = this.newCustomerForm;
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
  }
  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypeList = customerTypes;
    });
  }

  checkAge(control: AbstractControl) {
    return (new Date().getFullYear()) - new Date(control.value).getFullYear() >= 18 ? null : {ageError: true};
  }

  onSubmitAdd() {
    const customer = this.newCustomerForm.value;
    this.customerService.saveCustomer(customer);
    this.newCustomerForm.reset();
    this.getAll();
  }

  edit(customerId: number) {
    this.editCustomerId = customerId;
    this.customerService.findCustomerById(customerId).subscribe(customer => {
      this.editCustomer = customer;
      this.editCustomerForm = new FormGroup({
        id: new FormControl(this.editCustomer.id, [Validators.required]),
        name: new FormControl(this.editCustomer.name, [Validators.required]),
        dayOfBirth: new FormControl(this.editCustomer.dayOfBirth, [Validators.required, this.checkAge]),
        gender: new FormControl(this.editCustomer.gender, [Validators.required]),
        idCard: new FormControl(this.editCustomer.idCard, [Validators.pattern(/\d{9}(\d{3})?/), Validators.required]),
        phoneNumber: new FormControl(this.editCustomer.phoneNumber, [Validators.pattern(/^([(]84[)][+]|0)9[0-1]\d{7}$/), Validators.required]),
        email: new FormControl(this.editCustomer.email, [Validators.email]),
        address: new FormControl(this.editCustomer.address, [Validators.required]),
        customerType: new FormControl(this.editCustomer.customerType, [Validators.required])
      });
    });
  }

  onSubmitEdit() {
    const customer = this.editCustomerForm.value;
    this.customerService.updateCustomer(this.editCustomerId, customer).subscribe(() => {
      alert('Sửa thành công');
      this.getAll();
    });
  }

  delete(id: number) {
    this.deleteCustomerId = id;
    this.customerService.findCustomerById(id).subscribe(customer => {
      this.deleteCustomer = customer;
    });
  }

  onDelete() {
    if (this.deleteCustomerId) {
      this.customerService.deleteCustomer(this.deleteCustomerId).subscribe(() => {
        alert('Xóa Thành Công.');
        this.getAll();
      });
    }
  }
}
