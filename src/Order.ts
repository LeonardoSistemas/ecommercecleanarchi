import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrdemItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon: Coupon | undefined;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));

    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
        const atualdate = new Date();
        return atualdate < new Date(this.coupon.expirationdate) ? true : false;
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        
        if (this.coupon) {
            
            total -= ((total * this.coupon.percentage) / 100);
        }
        return total;
    }
}