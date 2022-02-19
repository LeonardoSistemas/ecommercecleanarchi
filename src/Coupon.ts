export default class Coupon {
    constructor(readonly code: string, readonly percentage: number, readonly expirationdate: Date) { }

    addCoupon() {
        const atualdate = new Date();
        return atualdate < new Date(this.expirationdate) ? true : false;
    }
}