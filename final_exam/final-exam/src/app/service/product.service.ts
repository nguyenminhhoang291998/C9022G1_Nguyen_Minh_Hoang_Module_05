import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

const URL_API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL_API);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(URL_API, product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(URL_API + '/' + id, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(URL_API + '/' + id);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(URL_API + '/' + id);
  }
}
