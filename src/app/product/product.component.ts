import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { IProduct } from '../../interfaces/IProduct'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IOpenClipArt } from 'src/interfaces/IOpenClipArt';
import { NotifyService } from 'src/services/notify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /**
   * Product properties
   */
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  /**
   * Properties used for component visuals
   */
  showDisplayClipartComponent: boolean
  listFilter: string;

  constructor(private _productService: GetDataService, private _router: Router, private _notify: NotifyService) { }

  ngOnInit() {
    //Method used for setting number of starts on the add page.
    this.starRating = (document.getElementById("rating") as HTMLInputElement).valueAsNumber;
  }

  /**
   * Method used to save product.
   * Once product is saved, user is navigated to home page
   * If product is not saved, red alert is shown
   */
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
    this._productService.sendData(product).then(() => {
      this._router.navigateByUrl("/home");
    }, err => {
      this._notify.showError("Something went wrong!")
    });
  }

  /**
   * Method used for visuals
   * Changes value under slider to current value
   * @param value Current star rating value
   */
  changeSliderValue(value: number) {
    this.starRating = value;
  }

  /**
   * Used for hiding and showing clipart component
   */
  showHideDisplayClipartComponent(): boolean {
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent
    return false;
  }

  /**
   * Method used to capture url emitted by child component
   * @param event Captured Image URL
   */
  addImageStringToFormTextBox(event): boolean {
    this.imageUrl = event;
    this.showHideDisplayClipartComponent()
    return false
  }
}
