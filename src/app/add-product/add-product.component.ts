import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

 // tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('' , Validators.required),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid? :', form.valid);
    console.log('name :' , form.value.name);
    console.log('price :' , form.value.price);
    console.log('description :' , form.value.description);
  }

}
