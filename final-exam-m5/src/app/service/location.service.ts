import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../model/location";

const URL_API = "http://localhost:8080/location"

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(URL_API + '/getAll');
  }
}
