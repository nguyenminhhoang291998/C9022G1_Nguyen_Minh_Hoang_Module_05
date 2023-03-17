import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FacilityComponent} from './component/facility/facility.component';
import {CustomerComponent} from './component/customer/customer.component';
import {ContractComponent} from './component/contract/contract.component';
import {HomeComponent} from './component/home/home.component';
import {SharedModule} from './component/shared/shared.module';
import {HeaderComponent} from './component/shared/header/header.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
