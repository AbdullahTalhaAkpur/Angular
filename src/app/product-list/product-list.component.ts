import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productRepository: ProductRepository;
    
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService
    ) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      if(params["categoryId"]) {
        this.products = this.productRepository.getProductsByCategoryId(params["categoryId"]);
      } else {
       
        this.productService.getProducts().subscribe(result => {
         for(const key in result) {
           this.products.push({ ...result[key], id: key });
         }       
        });

      }
    });
}


}