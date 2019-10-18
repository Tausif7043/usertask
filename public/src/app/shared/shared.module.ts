import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ErrorDisplayComponent } from './components/error-display.component';

@NgModule({
  declarations: [FileUploadComponent, ErrorDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileUploadComponent,
    ErrorDisplayComponent
  ]
})
export class SharedModule { }
