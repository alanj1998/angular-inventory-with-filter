import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filter: string
  data: IProduct[]
  filteredData: IProduct[]
  hidden: boolean
  message: string

  constructor(private _httpService: GetDataService) {

  }

  ngOnInit() {
    //On init, get all data and hide images
    this.hidden = true;
    this.message = "hide";
    this._httpService.getData().subscribe(element => {
      this.data = element;
      this.filteredData = this.data;
    })
  }

  /**
   * Method used to filter products in the list
   * @param filter String used as product filter
   */
  setFilter(filter: string): void {
    this.filter = filter;

    if (filter == "") {
      this.filteredData = this.data;
    }
    else {
      this.filteredData = []
      this.data.forEach(element => {
        if (element.productName.toLowerCase().includes(filter.toLowerCase()))
          this.filteredData.push(element)
      })
    }
  }

  /**
   * Method used to toggle images
   */
  toggleImages(): void {
    if (this.hidden) {
      this.hidden = false;
      this.message = 'show';
    }
    else {
      this.hidden = true;
      this.message = 'hide';
    }
  }

  /**
   * Method used to delete product from database
   * @param id Id of product to be deleted
   */
  delete(id: string) {
    this._httpService.deleteData(id);
  }
}
