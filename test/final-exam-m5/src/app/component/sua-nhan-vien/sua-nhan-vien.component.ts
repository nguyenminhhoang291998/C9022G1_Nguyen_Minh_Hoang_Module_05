import { Component, OnInit } from '@angular/core';
import {NhanVienService} from "../../service/nhan-vien.service";
import {ChucVuService} from "../../service/chuc-vu.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ChucVu} from "../../model/chuc-vu";
import Swaf from "sweetalert2";

@Component({
  selector: 'app-sua-nhan-vien',
  templateUrl: './sua-nhan-vien.component.html',
  styleUrls: ['./sua-nhan-vien.component.css']
})
export class SuaNhanVienComponent implements OnInit {

  constructor(private nhanVienService: NhanVienService,
              private chucVuService: ChucVuService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  suaNhanVienForm: FormGroup;
  id: string;
  danhSachChucVu: ChucVu[];

  ngOnInit(): void {
    this.chucVuService.getAll().subscribe(items =>
      this.danhSachChucVu = items)
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id')
      this.nhanVienService.findById(this.id).subscribe(nhanVien => {
        this.suaNhanVienForm = new FormGroup({
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
    const nhanVien = this.suaNhanVienForm.value;
    this.nhanVienService.update(this.id,nhanVien).subscribe(() => {
      Swaf.fire({
          title: "Sửa thành công",
          icon: "success",
          confirmButtonText: "Ok"
        }
      )
      this.router.navigateByUrl('');
    })
  }
}
