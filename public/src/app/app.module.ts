import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LayoutModule } from '@app/features/layout/layout.module';
import { LoginComponent } from '@app/features/login/login.component';
import { ForgetPasswordComponent } from '@app/features/forget-password/forget-password.component';
import { RegisterModule } from './features/register/register.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
