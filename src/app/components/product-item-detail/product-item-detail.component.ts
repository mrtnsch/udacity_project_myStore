import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
// @Input() product:Product;
activeProduct:Product = new Product;
selectedQuantity:number=1;
activeId:number=5;
  constructor(private route:ActivatedRoute,
    private productService:GetProductsService,
    private cartService:CartService) {
   }

  ngOnInit(): void {
    //routing to selected product
    this.route.params.subscribe((params: Params) => {
      this.activeId=params['id'];
    //getting product and finding the one with the corresponding id
    this.productService.getProducts().subscribe(data =>{
    this.activeProduct = data.find(product => product.id == this.activeId) as Product
    })
    })
  }

  addToCart(product:Product, quantity:number):void {
    this.cartService.addToCart(product, quantity);
    alert("Added to cart.")
  }
}
