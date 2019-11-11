import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {
  product;
  constructor(private service: ProductService) {
    this.product = this.service.getProducts();
   }
  ngOnInit() {

  }
}
