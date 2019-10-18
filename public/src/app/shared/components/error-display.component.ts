import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { appConfig } from '@app/configs/app-settings.config';

@Component({
  selector: 'error-display',
  template: `<div *ngIf="shouldShowErrors()" class="pull-left mb-1">
     <div class="error-text pl-2 pt-1" *ngFor="let error of listOfErrors()">{{error}}</div>
   </div>`,
  styles: [
    `.error-text{
      color: #c15454;
      font-size: 12px;
      text-align: left;
    }`
  ]
})

export class ErrorDisplayComponent {

  constructor() { }

  private static readonly errorMessages = {
    'required': () => 'Please fill out this field to continue.',
    'minlength': (params) => 'Please enter atleast ' + params.requiredLength + ' characters.',
    'maxlength': (params) => 'The maximum allowed characters is ' + params.requiredLength,
    'pattern': (params) => params.requiredPattern,
    'whitespace': () => 'Please enter valid value',
    'mustMatch': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    if (type === 'pattern') {
      switch (params.requiredPattern) {
        case '^[0-9]*$':
          params.requiredPattern = 'Only numbers allowed';
          break;
        case appConfig.pattern.NAME:
          params.requiredPattern = 'Please enter a valid name to continue.';
          break;
        case (appConfig.pattern.EMAIL).toString():
          params.requiredPattern = 'Please enter a valid email address to continue.';
          break;
        case appConfig.pattern.PRIMARYNUMBER:
          params.requiredPattern = 'Please enter a valid primary contact to continue.';
          break;
        case appConfig.pattern.EXTENSION:
          params.requiredPattern = 'Please enter a valid extension to continue.';
          break;
        case appConfig.pattern.ZIPCODE:
          params.requiredPattern = 'Please enter a valid Zip Code to continue.';
          break;
      }
    }
    return ErrorDisplayComponent.errorMessages[type](params);
  }

}
