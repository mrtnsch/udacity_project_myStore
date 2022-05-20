export class OrderDetails {
    fullName:string;
    address:string;
    ccNumber:string;
    total:number;

    constructor(fullName:string="", address:string="", ccNumber:string="", total:number=0) {
        this.fullName=fullName,
        this.address=address,
        this.ccNumber=ccNumber,
        this.total=total
    }
}