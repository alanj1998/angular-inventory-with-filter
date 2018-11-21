import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/services/notify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean
  navbarOpen: boolean
  constructor(private auth: AuthService, private router: Router, private _notify: NotifyService) { }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn()
  }

  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  logout() {
    this.auth.doLogout()
    this.loggedIn = this.isLoggedIn()
    this._notify.showSuccess("Bye!")
    this.router.navigate(['login'])
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
}