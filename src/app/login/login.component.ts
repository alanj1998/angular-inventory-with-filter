import { Component, OnInit } from '@angular/core';
import { MatLabel } from "@angular/material";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string
  form
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { 
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {
    this.auth.doLogin(this.form.value)
    .then(res => {
      this.router.navigate(['home'])
    }).catch(err => {
      this.errorMessage = err.message
    })
  }

}
