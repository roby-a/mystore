import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainComponent } from './contain/contain.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
{
path: '',
component: ContainComponent
},
{
  path: 'add-product',
  component: AddProductComponent
},
{
  path: 'add-product/:id',
  component: AddProductComponent
},
{
  path: 'product-details/:id',
  component: ProductDetailsComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainComponent,
    FooterComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes) ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
