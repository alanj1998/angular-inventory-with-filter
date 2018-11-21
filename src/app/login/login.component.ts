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

  /**
   * Login method used for logging in with email and password
   */
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

  /**
   * Login method used to login with facebook
   */
  loginWithFacebook() {
    this.auth.doFacebookAuth().then(() => {
      this.showWelcomeMessage()
      this.router.navigate(['home'])
    });
  }

  /**
   * Login method used to login with google
   */
  loginWithGoogle() {
    this.auth.doGoogleAuth().then(() => {
      this.showWelcomeMessage()
      this.router.navigate(['home'])
    });
  }

  /**
   * Method used for showing welcome message once user logs in
   */
  private showWelcomeMessage() {
    this._notify.showSuccess("Welcome back!")
  }
}
