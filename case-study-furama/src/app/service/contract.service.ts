import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000/contracts';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL, contract);
  }
}
