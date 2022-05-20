import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orderDetailsArr:OrderDetails[]=[];
  constructor() { }
}
