import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import * as firebase from 'firebase/';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus: boolean = false;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private notifier: NotifyService) { }

  /**
   * Method used to send verification email to user
   */
  sendEmailVerification() {
    this._firebaseAuth.authState.subscribe(user => {
      user.sendEmailVerification()
    });
  }

  /**
   * Method used for registration
   * @param value User filled out form
   */
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  /**
   * Method used for logging in
   * @param value User login form values
   */
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
          this.loggedInStatus = true;
        }, err => reject(err))
    })
  }

  /**
   * Method used for logging out
   */
  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this._firebaseAuth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
      this.loggedInStatus = false;
    });
  }

  /**
   * Method used for checking if user is logged in
   */
  isLoggedIn(): boolean {
    return this.loggedInStatus;
  }

  /**
   *@async Method used to login using Facebook
   */
  async doFacebookAuth() {
    await this._firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(() => this.loggedInStatus = true)
  }

  /**
   * @async Method used to login using Google
   */
  async doGoogleAuth() {
    await this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => this.loggedInStatus = true)
  }
}