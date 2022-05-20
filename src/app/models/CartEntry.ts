import { Product } from "./Product";

export class CartEntry {
    product:Product;
    quantity:number;

    constructor(product:Product, quantity:number) {
        this.product= product;
        this.quantity= quantity;
    }
}
