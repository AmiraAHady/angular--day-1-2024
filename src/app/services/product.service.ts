import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(
    pageNumber: number
  ): Observable<{ totalCount: number; productsData: IProduct[] }> {
    return this.http.get<{ totalCount: number; productsData: IProduct[] }>(
      `http://localhost:3003/product/getAllProducts?page=${pageNumber}`
    );
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      `http://localhost:3003/product/getById/${id}`
    );
  }
}
