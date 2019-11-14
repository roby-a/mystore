import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() item;
  @Input() count;
  @Output() isDeleted = new EventEmitter();
  @Output() cartCount = new EventEmitter();


  id;
  selectedProduct;
  constructor(private route: ActivatedRoute, private productservice: ProductService, private route2: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = + params.id; // (+) converts string 'id' to a number
      if (this.id) {
        console.log(this.id);
        this.productservice.updateProfile(this.id).subscribe(Response => {
          this.selectedProduct = Response;
          if (this.id) {
            this.item = this.selectedProduct;
          }
        });
      }
    });
  }


  delete(selectedId) {
    if (confirm('Veno?')) {
      this.productservice.deleteProduct(selectedId).subscribe(Response => {
        console.log(Response);
        this.isDeleted.emit('deleted');
      });
    } else {
      alert('cancelled');
    }
  }
  updateCart(selectedId) {
    this.cartCount.emit(selectedId);
  }
}
