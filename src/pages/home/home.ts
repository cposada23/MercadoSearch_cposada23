import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MercadoLibreProvider } from '../../providers/mercado-libre/mercado-libre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  product: string;
  products: Array<any>;
  constructor(public navCtrl: NavController, private mercadoLibre: MercadoLibreProvider) {

  }

  lookup() {
    this.mercadoLibre.searchProducts(this.product).subscribe(
      (products) => {
        this.products = products.results;
      }, (error) => {
        console.error("error", error);
        alert("there was an error looking for the product, try again later");
      });
  }

  otra(){
    console.log("hola");
  }

}
