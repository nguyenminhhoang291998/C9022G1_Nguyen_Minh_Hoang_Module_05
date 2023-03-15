import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {FacilityComponent} from './component/facility/facility.component';
import {CustomerComponent} from './component/customer/customer.component';
import {ContractComponent} from './component/contract/contract.component';



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
