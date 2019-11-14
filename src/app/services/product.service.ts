import { Injectable } from '@angular/core';
import { Products } from '../product/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionUrl: string = environment.baseUrl;

  add(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(this.actionUrl + '/product');
  }
  pushProducts(product: Products) {
    return this.http.post(this.actionUrl + '/product', product);
  }
  updateProfile(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  edit(formData, id) {
    return this.http.put(this.actionUrl + '/product/' + id, formData);
  }
  deleteProduct(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }

}
