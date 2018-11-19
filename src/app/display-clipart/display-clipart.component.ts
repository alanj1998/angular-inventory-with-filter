import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClipartService } from '../clipart.service';
import { IOpenClipArt } from 'src/interfaces/IOpenClipArt';

@Component({
  selector: 'app-display-clipart',
  templateUrl: './display-clipart.component.html',
  styleUrls: ['./display-clipart.component.css']
})
export class DisplayClipartComponent implements OnInit {

  @Input() imageStr: string;
  @Output() addImageStringEE: EventEmitter<any> = new EventEmitter()
  clipArtData: IOpenClipArt
  constructor(
    private _clipArt: ClipartService
  ) { }

  ngOnInit() {
    this._clipArt.getImageList(this.imageStr).subscribe(data => {
      this.clipArtData = data
    })
  }

  selectImage(imageStr): boolean {
    console.log(`Selected image: ${imageStr}`)
    this.addImageStringEE.emit(imageStr)
    return false
  }
}
