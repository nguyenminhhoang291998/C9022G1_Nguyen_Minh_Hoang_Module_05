import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import { DanhSachNhanVienComponent } from './component/danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { ThemNhanVienComponent } from './component/them-nhan-vien/them-nhan-vien.component';
import { SuaNhanVienComponent } from './component/sua-nhan-vien/sua-nhan-vien.component';
import { XoaNhanVienComponent } from './component/xoa-nhan-vien/xoa-nhan-vien.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachNhanVienComponent,
    ThemNhanVienComponent,
    SuaNhanVienComponent,
    XoaNhanVienComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
