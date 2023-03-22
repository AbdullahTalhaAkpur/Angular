import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../models/product";

//local service
@Injectable()
export class ProductService {
    private url = "https://ng-shopapp-d4ef5-default-rtdb.firebaseio.com/products.json";

    constructor (private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.url, product);
    }
}