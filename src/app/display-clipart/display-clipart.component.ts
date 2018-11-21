import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClipartService } from 'src/services/clipart.service';
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
    //Once component is initialised get images from the passed in image string
    this._clipArt.getImageList(this.imageStr).subscribe(data => {
      this.clipArtData = data
    })
  }

  /**
   * Method used to attatch image to product add form
   * @param imageStr URL to the image
   */
  selectImage(imageStr): boolean {
    this.addImageStringEE.emit(imageStr)
    return false
  }
}
