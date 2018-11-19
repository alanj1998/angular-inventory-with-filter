import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { NotificationsComponent } from './notifications/notifications.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule } from '@angular/material/';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayClipartComponent } from './display-clipart/display-clipart.component'

library.add(faStar)

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productadd',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
    canActivate: [AuthGuard]
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
    NavbarComponent,
    NotificationsComponent,
    LoginComponent,
    RegisterComponent,
    DisplayClipartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
