import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url : string = "http://localhost:3000/products"
  constructor(private _http: HttpClient) { }

  getData() : Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url);
  }
}
