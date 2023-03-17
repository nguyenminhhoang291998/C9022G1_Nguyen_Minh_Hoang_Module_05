import {Component, OnInit} from '@angular/core';
import {NhanVienService} from "../../service/nhan-vien.service";
import {ChucVuService} from "../../service/chuc-vu.service";
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ChucVu} from "../../model/chuc-vu";
import Swaf from "sweetalert2";


@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.css']
})
export class ThemNhanVienComponent implements OnInit {

  constructor(private nhanVienService: NhanVienService,
              private chucVuService: ChucVuService,
              private router: Router) {
  }

  nhanVienForm: FormGroup;
  danhSachChucVu: ChucVu[];

  ngOnInit(): void {
    this.chucVuService.getAll().subscribe(items =>
      this.danhSachChucVu = items)
    this.nhanVienForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      ten: new FormControl('',[Validators.required]),
      gioiTinh: new FormControl('',[Validators.required]),
      chucVu: new FormControl('',[Validators.required]),
      ngaySinh: new FormControl('',[Validators.required, this.checkAge]),
    });
  }

  onSubmit() {
    const nhanVien = this.nhanVienForm.value;
    console.log(nhanVien)
    this.nhanVienService.save(nhanVien).subscribe(() => {
      Swaf.fire({
        title: "Thêm thành công",
        icon: "success",
        confirmButtonText: "Ok"
        }
      )
      this.router.navigateByUrl('');
    })
  }
  checkAge(control: AbstractControl){
    return new Date().getFullYear() - new Date(control.value).getFullYear() >= 18? null : {errorAge : true};
  }
}
