import CouponRepository from "../../../domain/repository/CouponRepository";

export default class ValidateCoupon {
    constructor(readonly counponRepository: CouponRepository) { }

    async execute(code: string): Promise<boolean> {
        const coupon = await this.counponRepository.getByCode(code);
        if (!coupon) return false;
        return !coupon.isExpired();

    }
}