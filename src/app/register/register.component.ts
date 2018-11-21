import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _fb: FormBuilder,
    private _notify: NotifyService
  ) { }

  ngOnInit() {
    //On init bind form group to variable
    this.form = this._fb.group({
      email: ['', Validators.required], // first string is to prepopulate the form, second is an array of validators
      password: ['', Validators.required],
      name: [''],
      description: ['']
    })
  }

  /**
   * Method used for registration
   * If all goes well, user is notified and send to login screen
   * If not user is notified with red error
   */
  register() {
    this._authService.doRegister(this.form.value).then(() => this._router.navigate(['login'])).then(() => {
      this._notify.showSuccess("You have registred successfully!")
    }, () => {
      this._notify.showError("Failed to register!")
    })
  }
}
