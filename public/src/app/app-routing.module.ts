import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/features/login/login.component';
import { ForgetPasswordComponent } from '@app/features/forget-password/forget-password.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { showHeader: false, showSidebar: false, showFooter: true }
  },
  {
    path: 'register',
    loadChildren: () => import('@app/features/register/register.module').then(m => m.RegisterModule),
    data: { showHeader: true, showSidebar: false, showFooter: true }
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    data: { showHeader: false, showSidebar: false, showFooter: true }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
