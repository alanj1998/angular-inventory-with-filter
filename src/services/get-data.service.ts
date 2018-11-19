import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getData(): Observable<IProduct[]> {
    let products = this.productsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as IProduct;
      const id = a.payload.doc.id;

      return { id, ...data };
    })));

    return products;
  }

  sendData(data: IProduct): void {
    this.productsCollection.add(data);
  }

  deleteData(id: string) {
    this.productsCollection.doc(id).delete()
  }
}