import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from '@app/shared/components/validators/custom-validator';
import { appConfig } from '@app/configs/app-settings.config';

@Component({
  selector: 'app-company-shipper',
  templateUrl: './company-shipper.component.html',
  styleUrls: ['./company-shipper.component.css']
})
export class CompanyShipperComponent implements OnInit {
  public companyRegForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createCompanyRegForm();
  }

  ngOnInit() {
  }

  createCompanyRegForm() {
    this.companyRegForm = this.fb.group({
      company_name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      address: new FormControl(null, [Validators.required, , Validators.maxLength(500)]),
      company_type: ['', [Validators.required]],
      service_tax_no: [''],
      pan_no: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      email: new FormControl('', [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]),
      contact_no: new FormControl('', [Validators.pattern(appConfig.pattern.NUMBER)]),
      std_code: new FormControl('', [Validators.required]),
      landline_no: new FormControl('', [Validators.required]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
      gender: new FormControl('', [Validators.required]),
    }, {
        validator: [
          CustomValidator.MustMatch('password', 'confirm_password'),
        ]
      });
  }

  onCompnayRegSubmit() {
    console.log("onCompnayRegSubmit--->", this.companyRegForm.value);
    if (this.companyRegForm.valid) {
      console.log("onCompnayRegSubmit--->", this.companyRegForm.value);
    } else {
    }
  }
}
