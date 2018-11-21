import { Injectable } from '@angular/core';
import { Ng6NotifyPopupService } from 'ng6-notify-popup';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private _notify: Ng6NotifyPopupService
  ) { }

  private show(type: string, message: string) {
    this._notify.show(message, {
      duration: 2000,
      position: "top",
      type: type
    })
  }
  showSuccess(message: string) {
    this.show("success", message)
  }

  showError(message: string) {
    this.show("error", message)
  }
}
