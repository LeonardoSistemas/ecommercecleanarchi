import ValidateCoupon from "../../src/application/usercase/validate-coupon/ValidateCoupon";
import CouponRepository from "../../src/domain/repository/CouponRepository";
import Connection from "../../src/infra/database/Connection";
import PostgresSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory"

let connection : Connection;
let couponRepository : CouponRepository;

beforeEach(function () {

    connection = new PostgresSQLConnectionAdapter();
    couponRepository = new CouponRepositoryDatabase(connection);

})

test("Deve validar um cupom de desconto", async function () {
    //const couponRepository = new CouponRepositoryMemory();    
    const validateCoupon = new ValidateCoupon(couponRepository);
    const isValid = await validateCoupon.execute("VALE20");
    expect(isValid).toBeTruthy();
})

afterEach(async function(){
    await connection.close();
})