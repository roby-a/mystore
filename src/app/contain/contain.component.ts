import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {
  count = 0;
  product;
  constructor(private service: ProductService) { }
  displayProducts(): void {
    this.service.getProducts().subscribe(Response => { this.product = Response; });
  }
  ngOnInit() {
    this.displayProducts();
  }
  deleted(event) {
    this.displayProducts();
  }
  increaseCount(id) {
    this.count++;
    console.log(this.count);
    
  }
}
