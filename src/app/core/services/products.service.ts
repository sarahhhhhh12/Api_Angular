import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient : HttpClient) { }


  getproducts(): Observable<RootObject> 
  {
    return this._HttpClient.get<RootObject>('https://ecommerce.routemisr.com/api/v1/products');
  }
  




}
