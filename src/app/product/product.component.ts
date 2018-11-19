import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { IProduct } from '../../interfaces/IProduct'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IOpenClipArt } from 'src/interfaces/IOpenClipArt';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  showDisplayClipartComponent: boolean

  listFilter: string;

  constructor(private _httpService: GetDataService, private _router: Router) { }

  ngOnInit() {
    this.starRating = (document.getElementById("rating") as HTMLInputElement).valueAsNumber;

  }

  save() {
    let product: IProduct = {
      productId: this.productId,
      productName: this.productName,
      productCode: this.productCode,
      releaseDate: this.releaseDate,
      description: this.description,
      price: this.price,
      starRating: this.starRating,
      imageUrl: this.imageUrl,
    };
    this._httpService.sendData(product);
    this._router.navigateByUrl("/home");
  }

  changeSliderValue(value: number) {
    this.starRating = value;
  }

  showHideDisplayClipartComponent(): boolean {
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent
    return false;
  }

  addImageStringToFormTextBox(event): boolean {
    this.imageUrl = event;
    return false
  }
}
