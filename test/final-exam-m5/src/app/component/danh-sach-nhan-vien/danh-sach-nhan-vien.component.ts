import {Component, Input, OnInit} from '@angular/core';
import {NhanVienService} from "../../service/nhan-vien.service";
import {ChucVuService} from "../../service/chuc-vu.service";
import {NhanVien} from "../../model/nhan-vien";
import {ChucVu} from "../../model/chuc-vu";
import Swaf from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-danh-sach-nhan-vien',
  templateUrl: './danh-sach-nhan-vien.component.html',
  styleUrls: ['./danh-sach-nhan-vien.component.css']
})
export class DanhSachNhanVienComponent implements OnInit {

  constructor(private nhanVienService: NhanVienService,
              private chucVuService: ChucVuService,
              private router: Router) {
  }
  @Input('data') meals: string[] = [];
  page: number = 0;
  danhSachNhanVien: NhanVien[];
  danhSachChucVu: ChucVu[];
  idDelete: string;
  nhanVienDelete: NhanVien;

  ngOnInit(): void {
    this.chucVuService.getAll().subscribe(items =>
      this.danhSachChucVu = items)
    this.nhanVienService.getAll().subscribe(items =>
      this.danhSachNhanVien = items
    );
  }

  search(name: string, chucVu: string) {
    if(chucVu == "0"){
      this.nhanVienService.searchByName(name).subscribe(nhanVien =>
      this.danhSachNhanVien = nhanVien)
    }else {
      this.nhanVienService.searchByNameAndChucVu(name,parseInt(chucVu)).subscribe(nhanVien =>
        this.danhSachNhanVien = nhanVien)
    }
  }

  delete(id: string) {
    this.idDelete = id;
    this.nhanVienService.findById(id).subscribe(nhanVien => {
      this.nhanVienDelete = nhanVien;
    })
  }


  onDelete() {
    this.nhanVienService.delete(this.idDelete).subscribe(() => {
      Swaf.fire({
          title: "Xóa thành công",
          icon: "success",
          confirmButtonText: "Ok"
        }
      )
      this.chucVuService.getAll().subscribe(items =>
        this.danhSachChucVu = items)
      this.nhanVienService.getAll().subscribe(items =>
        this.danhSachNhanVien = items
      );
    })
  }
}
