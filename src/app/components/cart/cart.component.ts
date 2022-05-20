import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { CartEntry } from 'src/app/models/CartEntry';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { OrderDetails } from 'src/app/models/OrderDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:CartEntry[] = [];
  cartValue:number=0;
  fullName:string="";
  address:string="";
  ccNumber:string="";

  orderDetails:OrderDetails = new OrderDetails;

  
  constructor(private cartService:CartService,
    private orderservice:OrderServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.cart=this.cartService.readCartContents();
    this.cartValue=this.cartService.cartValue;
    this.orderDetails.total=this.cartValue;
  }

  recalculateValue() {
    this.cartService.calculateCartValue();
    this.cartValue=this.cartService.cartValue;
    this.orderDetails.total=this.cartValue
  }

  onSubmit() {
    alert("Your order has been received!")
    this.orderservice.orderDetailsArr.push(this.orderDetails);
    this.router.navigate(['/confirmation']);
  }
}
