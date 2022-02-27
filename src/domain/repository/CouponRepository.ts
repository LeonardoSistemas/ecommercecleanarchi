import Coupon from "../entity/Coupon";

export default interface CuponRepository {
    getByCode(code:string) : Coupon | undefined;
}