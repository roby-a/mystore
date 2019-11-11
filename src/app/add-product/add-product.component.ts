import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit
{

  constructor(public productservice: ProductService) { }
  myForm: FormGroup;

  ngOnInit()
  {
    this.myForm = new FormGroup({
      name: new FormControl('' , Validators.required),
      price: new FormControl(''),
      description: new FormControl('' , Validators.maxLength(30)),
      image: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup)
  {
    if (this.myForm.valid)
    {
    this.productservice.add(this.myForm.value);
    } else
    {
    alert('false entry');
    }
    console.log('Valid? :', form.valid);
    console.log('name :' , form.value.name);
    console.log('price :' , form.value.price);
    console.log('description :' , form.value.description);
    this.myForm.reset();
  }
}
