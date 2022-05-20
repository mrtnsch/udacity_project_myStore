import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  selectedQuantity:number=1;

  @Input() product: Product;
  @Output() addProductToCart: EventEmitter<Product> = new EventEmitter;
  constructor(private cartService:CartService) {
    this.product = {
      id:0,
      name:"",
      price:0,
      url:"",
      description:""
    }
   }

  ngOnInit(): void {
  }

  addToCart(product:Product, quantity:number):void {
    this.addProductToCart.emit(product);
    this.cartService.addToCart(product, this.selectedQuantity);
    alert("Added to cart.")
  }

}
