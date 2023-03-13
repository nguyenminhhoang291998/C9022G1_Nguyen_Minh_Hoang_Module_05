import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {HomeComponent} from './home/home.component';
import {FacilityComponent} from './facility/facility.component';
import {ContractComponent} from './contract/contract.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
