import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '../services/get-data.service';
import { RemoveHyphenPipe } from './remove-hyphen.pipe';
import { StarratingComponent } from './starrating/starrating.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ProductComponent } from './product/product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { firebaseConfig } from "../environments/environment";

library.add(faStar)

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'productadd',
    component: ProductComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RemoveHyphenPipe,
    StarratingComponent,
    ProductComponent,
    ErrorPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
