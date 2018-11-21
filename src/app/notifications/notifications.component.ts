import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  /*
  DEPRECATED SERVICE
  */
  constructor() { }
  display: boolean
  ngOnInit() {
  }

}
