import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

// const API_URL = 'http://localhost:3000/customers';
const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(API_URL + '/customer/' + id);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/save', customer);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.http.put<Customer>(API_URL + '/update', customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete<Customer>(API_URL + '/' + id);
  }

}
