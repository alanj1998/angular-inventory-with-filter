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
    // On init check if the user is logged in - used for navbar styling
    this.loggedIn = this.isLoggedIn()
  }

  /**
   * Method used to check if user is logged in
   */
  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  /**
   * Method used to logout from the app
   */
  logout() {
    this.auth.doLogout()
    this.loggedIn = this.isLoggedIn()
    this._notify.showSuccess("Bye!")
    this.router.navigate(['login'])
  }

  /**
   * Method used in mobile view. Used to toggle navbar on and off
   */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
}