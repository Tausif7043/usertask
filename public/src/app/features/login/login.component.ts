import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }

}
