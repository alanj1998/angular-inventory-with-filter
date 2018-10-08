import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url: string = "http://localhost:3000/products";
  productsCollection: AngularFirestoreCollection<IProduct>
  constructor(private _http: HttpClient, private _af: AngularFirestore) { 
    this.productsCollection = this._af.collection<IProduct>("products");
  }

  getData() : Observable<IProduct[]> {
    let products = this.productsCollection.valueChanges();

    return products;
  }

  sendData(data: IProduct) : void {
    this.productsCollection.add(data);
  }
}