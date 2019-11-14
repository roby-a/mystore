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
  // tslint:disable-next-line: new-parens
  @Output() isDeleted = new EventEmitter;
  // tslint:disable-next-line: new-parens
  @Output() cartCount = new EventEmitter;

  count = 0;
  id;
  selectedProduct;
  constructor(private route: ActivatedRoute, private productservice: ProductService, private route2: Router) { }

  ngOnInit() {

    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      this.id = + params.id; // (+) converts string 'id' to a number
      if (this.id) {
        console.log(this.id);
        this.productservice.updateProfile(this.id).subscribe(Response => {
          this.selectedProduct = Response;

          console.log('selected', this.selectedProduct);
          
          // console.log(this.selectedProduct);
          if (this.id) {
            this.item = this.selectedProduct;
            console.log(this.item);
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
      // tslint:disable-next-line: deprecation


    } else {
      alert('cancelled');
    }
  }
  updateCart() {
    this.count++;
    console.log(this.count);
    this.cartCount.emit('updateCount(this.count)');
  }
}
