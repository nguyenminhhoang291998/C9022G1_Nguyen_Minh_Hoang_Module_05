import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/coach";
import {CoachType} from "../model/coach-type";
const URL_API = "http://localhost:8080/coachType"

@Injectable({
  providedIn: 'root'
})
export class CoachTypeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<CoachType[]> {
    return this.http.get<CoachType[]>(URL_API + '/getAll');
  }
}
