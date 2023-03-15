import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL);
  }

  findFacilityById(id: number): Observable<Facility> {
    return this.http.get<Facility>(API_URL + '/' + id);
  }

  saveFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL, facility);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(API_URL + '/' + id, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(API_URL + '/' + id);
  }
}
