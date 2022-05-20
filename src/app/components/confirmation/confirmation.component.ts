import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { OrderDetails } from 'src/app/models/OrderDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderDetails:OrderDetails = new OrderDetails;

  constructor(private orderService:OrderServiceService,
    public router:Router) { }

  ngOnInit(): void {
    this.orderDetails = this.orderService.orderDetailsArr[0];
  }

}
