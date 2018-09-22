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
    this.hidden = true;
    this.message = "Hide Images";
    this._httpService.getData().subscribe(element => {
      this.data = element;
      this.filteredData = this.data;
    })
  }

  setFilter(filter: string): void {
    this.filter = filter;

    if(filter == "") {
      this.filteredData = this.data;
    }
    else {
      this.filteredData = []
      this.data.forEach(element => {
        if(element.productName.toLowerCase().includes(filter.toLowerCase()))
          this.filteredData.push(element)
      })
    }
  }

  toggleImages(): void {
    if(this.hidden) {
      this.hidden = false;
      this.message = 'Show Images';
    }
    else {
      this.hidden = true;
      this.message = 'Hide Images';
    }
  }
}
