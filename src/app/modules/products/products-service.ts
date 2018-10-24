import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

import { Products } from '../shared/interfaces/products-interface';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products> {

    // real request
    // return this.http.get<Product[]>('some_url');

    // mock data
    const products: Products = {
      products: [
        {
          id: 14557,
          name: 'Flat White',
          description: 'Freshly-ground beans and steamed milk',
          price: 234
        }, {
          id: 14558,
          name: 'Flat White X',
          description: 'Freshly-ground beans and steamed milk',
          price: 432
        }, {
          id: 14559,
          name: 'Flat White XX',
          description: 'Freshly-ground beans and steamed milk',
          price: 345
        }
      ]
    };

    return new Observable<Products>((observer: Subscriber<Products>) => {
      window.setTimeout(() => observer.next(products), 1000);
      return observer;
    });
  }
}
