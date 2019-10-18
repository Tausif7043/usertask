import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/features/layout/header/header.component';
import { FooterComponent } from '@app/features/layout/footer/footer.component';
import { SidebarComponent } from '@app/features/layout/sidebar/sidebar.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class LayoutModule { }
