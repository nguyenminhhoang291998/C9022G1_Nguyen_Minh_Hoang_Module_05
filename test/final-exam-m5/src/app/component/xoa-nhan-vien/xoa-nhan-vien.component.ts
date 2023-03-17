import { Component, OnInit } from '@angular/core';
import {NhanVienService} from "../../service/nhan-vien.service";
import {ChucVuService} from "../../service/chuc-vu.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ChucVu} from "../../model/chuc-vu";
import Swaf from "sweetalert2";

@Component({
  selector: 'app-xoa-nhan-vien',
  templateUrl: './xoa-nhan-vien.component.html',
  styleUrls: ['./xoa-nhan-vien.component.css']
})
export class XoaNhanVienComponent implements OnInit {
  constructor(private nhanVienService: NhanVienService,
              private chucVuService: ChucVuService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  xoaNhanVienForm: FormGroup;
  id: string;
  danhSachChucVu: ChucVu[];

  ngOnInit(): void {
    this.chucVuService.getAll().subscribe(items =>
      this.danhSachChucVu = items)
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id')
      this.nhanVienService.findById(this.id).subscribe(nhanVien => {
        this.xoaNhanVienForm = new FormGroup({
          id: new FormControl(nhanVien.id),
          ten: new FormControl(nhanVien.ten),
          gioiTinh: new FormControl(nhanVien.gioiTinh),
          chucVu: new FormControl(this.danhSachChucVu.find(item => item.ma === nhanVien.chucVu.ma)),
          ngaySinh: new FormControl(nhanVien.ngaySinh),
        });
      })
    })

  }

  onSubmit() {
    this.nhanVienService.delete(this.id).subscribe(() => {
      Swaf.fire({
          title: "Xóa thành công",
          icon: "success",
          confirmButtonText: "Ok"
        }
      )
      this.router.navigateByUrl('');
    })
  }

}
