import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {

  @Input() rating : number
  starWidth: number
  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 115 / 5;
    console.log(this.rating)
  }

}
