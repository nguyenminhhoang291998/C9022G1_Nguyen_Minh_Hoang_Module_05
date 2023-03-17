import {ChucVu} from "./chuc-vu";

export interface NhanVien {
  id?: string;
  ten?:string;
  gioiTinh?: boolean;
  chucVu?: ChucVu;
  ngaySinh?: string;
}
