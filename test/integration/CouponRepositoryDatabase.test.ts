import Connection from "../../src/infra/database/Connection";
import PostgresSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

let connection : Connection;

beforeEach(function () {

    connection = new PostgresSQLConnectionAdapter();
})

test("Deve testar o repositorio de cupom", async function () {
    const couponRepository = new CouponRepositoryDatabase(connection);
    const coupon = await couponRepository.getByCode("VALE20");
    expect(coupon?.percentage).toBe(20);
})

afterEach(async function(){
    await connection.close();
})