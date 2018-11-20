import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      email: ['', Validators.required], // first string is to prepopulate the form, second is an array of validators
      password: ['', Validators.required],
      name: [''],
      description: ['']
    })
  }

  register() {
    this._authService.doRegister(this.form.value).then(() => this._router.navigate(['login']))
  }
}
