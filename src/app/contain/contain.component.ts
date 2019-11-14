import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {
  count;
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
  updateCount(count) {
    this.count++;
    console.log(this.count);
    }
}
