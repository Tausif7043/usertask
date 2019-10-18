import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { appConfig } from '@app/configs/app-settings.config';
import { CustomValidator } from '@app/shared/components/validators/custom-validator';

@Component({
  selector: 'app-individual-shipper',
  templateUrl: './individual-shipper.component.html',
  styleUrls: ['./individual-shipper.component.css']
})
export class IndividualShipperComponent implements OnInit {
  public individualRegForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createIndiRegForm();
  }

  ngOnInit() {
  }

  /**
  * Creates personal info form
  */
  createIndiRegForm() {
    this.individualRegForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      aadhar: new FormControl(null, [Validators.required]),
      profile_image: new FormControl(null, [Validators.required]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
      contact_number: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern(appConfig.pattern.NUMBER)]),
      email: new FormControl('', [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]),
      gender: new FormControl('', [Validators.required])
    }, {
        validator: [
          CustomValidator.MustMatch('password', 'confirm_password'),
        ]
      });
  }

  onIndividualRegSubmit() {
    console.log("individualRegForm--->", this.individualRegForm.value);
    if (this.individualRegForm.valid) {
      console.log("individualRegForm--->", this.individualRegForm.value);
    } else {
    }
  }


}
