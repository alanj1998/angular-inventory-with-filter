import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOpenClipArt } from 'src/interfaces/IOpenClipArt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipartService {

  url: string = "https://openclipart.org/search/json/?query="
  data: IOpenClipArt
  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Getting images from Clipart Service
   * @param imageStr String used for filtering
   */
  getImageList(imageStr: string): Observable<IOpenClipArt> {
    console.log(`Got this text: ${imageStr}`)
    return this._http.get<IOpenClipArt>(this.url + imageStr)
  }
}
