import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the MercadoLibreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoLibreProvider {
  private api = 'https://api.mercadolibre.com/sites/MCO/search?q=';
  constructor(public http: Http) {

  }

  public searchProducts(product: string): Observable<any> {
        return this.http.get(`${this.api}${product}`).map(res => res.json());
  }

}
