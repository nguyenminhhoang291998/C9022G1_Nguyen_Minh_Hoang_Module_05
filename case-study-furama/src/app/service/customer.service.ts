import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  findCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(API_URL + '/' + id);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customer);
  }

  updateCustomer(id: string, customer: Customer) {
    return this.http.put<Customer>(API_URL + '/' + id, customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete<Customer>(API_URL + '/' + id);
  }

}
