import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DanhSachNhanVienComponent} from "./component/danh-sach-nhan-vien/danh-sach-nhan-vien.component";
import {ThemNhanVienComponent} from "./component/them-nhan-vien/them-nhan-vien.component";
import {SuaNhanVienComponent} from "./component/sua-nhan-vien/sua-nhan-vien.component";
import {XoaNhanVienComponent} from "./component/xoa-nhan-vien/xoa-nhan-vien.component";


const routes: Routes = [
  {path: '', component: DanhSachNhanVienComponent},
  {path: 'them', component: ThemNhanVienComponent},
  {path: 'sua/:id', component: SuaNhanVienComponent},
  {path: 'xoa/:id', component: XoaNhanVienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
