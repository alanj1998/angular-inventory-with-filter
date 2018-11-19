import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn()
  }

  isLoggedIn(){
    return this.auth.isLoggedIn()
  }

  logout() {
    this.auth.doLogout()
    this.loggedIn = this.isLoggedIn()
    this.router.navigate(['login'])
  }
}