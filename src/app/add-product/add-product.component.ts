import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public productservice: ProductService, private route: ActivatedRoute, private router: Router) { }
  myForm: FormGroup;
  id: any;
  data: any;

  ngOnInit() {
    this.myForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      title: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5), Validators.pattern('^[a-zA-Z ]*$')]),
      price: new FormControl(''),
      description: new FormControl('', Validators.maxLength(30)),
      imageUrl: new FormControl(''),
      isAvailable: new FormControl(true)
    });

    this.route.params.subscribe(params => { this.id = +params.id; });
    if (this.id)
    {
    this.productservice.updateProfile(this.id).subscribe(response => {
      this.data = response;
      this.myForm.patchValue({
        title: this.data.title,
        imageUrl: this.data.imageUrl,
        price: this.data.price,
        description: this.data.description,
        isAvailable: this.data.isAvailable
      });
    }); }
  }
  onSubmit(form: FormGroup) {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        this.productservice.edit(form.value, this.id).subscribe(data => {
          alert('Product Added Successfully');
          this.router.navigate(['']);
        });
      } else {
        this.productservice.pushProducts(this.myForm.value).subscribe(data => {
          alert('Product Added Successfully');
          this.router.navigate(['']);
        });

        this.myForm.reset();
      }
    });

  }

}
