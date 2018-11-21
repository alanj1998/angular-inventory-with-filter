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
  constructor(private _af: AngularFirestore) {
    this.productsCollection = this._af.collection<IProduct>("products");
  }

  /**
   * Method used to get products from database
   */
  getData(): Observable<IProduct[]> {
    let products = this.productsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as IProduct;
      const id = a.payload.doc.id;

      return { id, ...data };
    })));

    return products;
  }

  /**
   * Method used for adding products to db
   * @param data Product to be added
   */
  sendData(data: IProduct): Promise<any> {
    return this.productsCollection.add(data);
  }

  /**
   * Method used for deleting products from db
   * @param id Id of product to be deleted
   */
  deleteData(id: string) {
    this.productsCollection.doc(id).delete()
  }
}