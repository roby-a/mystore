import { Injectable } from '@angular/core';
import { Products } from '../product/product';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

private product: Array<Products> = [
    { name: 'Timex',
    image: 'https://rukminim1.flixcart.com/image/452/542/js6e1e80/watch/v/p/f/022-xtreme-original-imafds6nghmxey5f.jpeg?q=50',
    description: 'Men\'s watch',
    imageAlt: '',
    price: 1999,
    isAvailable: true
    },
    { name: 'Casio',
      image: 'https://rukminim1.flixcart.com/image/452/542/jovshow0/watch/j/u/b/lcs-8049-lois-caron-original-imafb9ytzjtrgmza.jpeg?q=50',
      description: 'Men\'s watch',
      imageAlt: '',
      price: 1000,
      isAvailable: false
    },
    { name: 'Police',
      // tslint:disable-next-line:max-line-length
      image: 'https://rukminim1.flixcart.com/image/452/542/jhgl5e80/watch/e/x/5/1283-army-green-chronograph-analog-digital-skmei-original-imaf5f7mjafzr9zt.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 2000,
      isAvailable: true
    },
    { name: 'Rado',
      image: 'https://rukminim1.flixcart.com/image/452/542/jvif0y80/watch/h/c/8/ls2804-limestone-original-imafgeayzhjhpb9f.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 29999,
      isAvailable: true
    },
    { name: 'Invicta',
      image: 'https://rukminim1.flixcart.com/image/452/542/joonafk0/watch/g/2/7/2058-bl-fogg-original-imafaygqyuryhnmf.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 5000,
      isAvailable: true
    },
    { name: 'Citizen',
      // tslint:disable-next-line:max-line-length
      image: 'https://rukminim1.flixcart.com/image/452/542/jzn0tjk0/watch/f/y/4/abx2054-bl-blue-dail-abrexo-original-imafjm8bhq83ufjy.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 6999,
      isAvailable: true
    },
    { name: 'Fogg',
      image: 'https://rukminim1.flixcart.com/image/452/542/jr6o13k0/watch/w/q/z/1164-br-fogg-original-imaf9stmmgg2eq2f.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 4559,
      isAvailable: true
    },
    { name: 'Lois Caron',
      image: 'https://rukminim1.flixcart.com/image/452/542/k2nmaa80/watch/q/f/5/lcs-8404-lois-caron-original-imafc77rf2qrn3rj.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 6789,
      isAvailable: true
    },
    { name: 'Adixon',
      image: 'https://rukminim1.flixcart.com/image/452/542/watch/5/h/q/9519sl03-adixion-original-imaerykfyxhmqnjv.jpeg?q=50',
     description: 'Men\'s watch',
      imageAlt: '',
      price: 3456,
      isAvailable: true
    },

   ];
getProducts() {
  return this.product;
 }

 add(pro: Products) {
  this.product.push(pro);
}


}
