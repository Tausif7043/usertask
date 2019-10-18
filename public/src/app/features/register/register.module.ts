import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectDirective } from 'ng2-file-upload';

import { RegisterRoutingModule } from './register-routing.module';
import { ShipperRegisterComponent } from './components/shipper-register/shipper-register.component';
import { TransRegisterComponent } from './components/trans-register/trans-register.component';
import { IndividualShipperComponent } from './components/shipper-register/individual-shipper.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyShipperComponent } from './components/shipper-register/company-shipper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [ShipperRegisterComponent, TransRegisterComponent, IndividualShipperComponent,
    CompanyShipperComponent, FileSelectDirective],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    IndividualShipperComponent
  ]
})
export class RegisterModule { }
