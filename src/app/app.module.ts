import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '../services/get-data.service';
import { RemoveHyphenPipe } from './remove-hyphen.pipe';
import { StarratingComponent } from './starrating/starrating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RemoveHyphenPipe,
    StarratingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
