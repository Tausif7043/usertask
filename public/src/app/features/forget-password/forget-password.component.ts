import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetDetailForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forgetDetailForm = this.formBuilder.group({
      email: ['']
    });
  }

  onSubmit() {
    if (this.forgetDetailForm.invalid) {
      return;
    }
    this.router.navigate(['/login']);
  }

}
