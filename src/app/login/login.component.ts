import { Component, OnInit } from '@angular/core';
import { MatLabel } from "@angular/material";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { NotifyService } from 'src/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string
  form: any
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private _notify: NotifyService) {
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
        this.showWelcomeMessage()
        this.router.navigate(['home'])
      }).catch(err => {
        this.errorMessage = err.message
        this._notify.showError(this.errorMessage)
      })
  }

  loginWithFacebook() {
    this.auth.doFacebookAuth().then(() => {
      this.showWelcomeMessage()
      this.router.navigate(['home'])
    });
  }

  loginWithGoogle() {
    this.auth.doGoogleAuth().then(() => {
      this.showWelcomeMessage()
      this.router.navigate(['home'])
    });
  }

  showWelcomeMessage() {
    this._notify.showSuccess("Welcome back!")
  }
}
