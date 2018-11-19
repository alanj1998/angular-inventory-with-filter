import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { IProduct } from '../../interfaces/IProduct'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  input: IProduct
  starRating: number
  constructor(private _httpService: GetDataService, private _router: Router) { }

  ngOnInit() {
    this.starRating = (document.getElementById("rating") as HTMLInputElement).valueAsNumber;
  }

  save(form: NgForm) {
    this.input = form.value as IProduct;

    if(!this.input.imageUrl.includes('http', 0) || !this.input.imageUrl.includes('https', 0)){
      this.input.imageUrl = "https://" + this.input.imageUrl;
    }
    this._httpService.sendData(this.input);
    this._router.navigateByUrl("/products");
  }

  changeSliderValue(value : number) {
    this.starRating = value;
  }
}
