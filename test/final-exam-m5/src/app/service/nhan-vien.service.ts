import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NhanVien} from "../model/nhan-vien";

const URL_API = 'http://localhost:3000/danhSachNhanVien'

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(URL_API);
  }

  findById(id: string): Observable<NhanVien> {
    return this.http.get<NhanVien>(URL_API + '/' + id);
  }

  save(nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.post<NhanVien>(URL_API, nhanVien);
  }

  update(id: string, nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.put<NhanVien>(URL_API + '/' + id, nhanVien);
  }

  delete(id: string): Observable<NhanVien> {
    return this.http.delete<NhanVien>(URL_API + '/' + id);
  }

  searchByName(name: string): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(URL_API + '?ten_like=' + name);
  }
  searchByNameAndChucVu(name: string, ma: number): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(URL_API + '?ten_like=' + name+ '&chucVu.ma=' + ma);
  }
}
