import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipperRegisterComponent } from './components/shipper-register/shipper-register.component';
import { TransRegisterComponent } from './components/trans-register/trans-register.component';


const routes: Routes = [
  { path: 'shipper', component: ShipperRegisterComponent },
  { path: 'trans', component: TransRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
