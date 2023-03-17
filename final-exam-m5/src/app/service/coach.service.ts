import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/coach";

const URL_API = "http://localhost:8080/coach"
@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<{content :Coach[]}> {
    return this.http.get<{content :Coach[]}>(URL_API + '/getAll');
  }
  findById(id: number): Observable<Coach> {
    return this.http.get<Coach>(URL_API + '/get/' + id);
  }
  save(coach: Coach): Observable<Coach> {
    return this.http.post<Coach>(URL_API + '/save', coach);
  }
  update(coach: Coach): Observable<Coach> {
    return this.http.put<Coach>(URL_API + '/update', coach);
  }
  delete(id: number): Observable<Coach> {
    return this.http.delete<Coach>(URL_API + '/delete/' + id);
  }
}
