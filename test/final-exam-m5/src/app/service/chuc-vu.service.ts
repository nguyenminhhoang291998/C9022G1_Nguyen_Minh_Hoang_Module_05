import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NhanVien} from "../model/nhan-vien";
import {ChucVu} from "../model/chuc-vu";
import {HttpClient} from "@angular/common/http";
const URL_API = 'http://localhost:3000/danhSachChucVu'

@Injectable({
  providedIn: 'root'
})
export class ChucVuService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChucVu[]> {
    return this.http.get<ChucVu[]>(URL_API);
  }
}
