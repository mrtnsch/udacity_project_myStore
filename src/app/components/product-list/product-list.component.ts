import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { GetProductsService } from 'src/app/services/get-products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[];
  constructor(
    private getProductsService:GetProductsService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.getProductsService.getProducts().subscribe(data => {
      this.productList = data;
    })
  }
  // addProductToCart(product:Product):void {
  //   //Todo: push this item to cart. create cart service
  //   // this.cartService.addToCart(product)
  // }
}
