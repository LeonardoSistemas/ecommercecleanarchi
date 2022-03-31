import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usercase/place-order/PlaceOrder";
import ItemRepository from "../../src/domain/repository/ItemRepository";
import OrderRepository from "../../src/domain/repository/OrderRepository";
import CouponRepository from "../../src/domain/repository/CouponRepository";
import PostgresSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import Connection from "../../src/infra/database/Connection";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";

let connection : Connection;
let itemRepository : ItemRepository;
let orderRepository : OrderRepository;
let couponRepository : CouponRepository;

beforeEach(function () {

    connection = new PostgresSQLConnectionAdapter();
    itemRepository = new ItemRepositoryDatabase(connection);
    orderRepository = new OrderRepositoryMemory();
    couponRepository = new CouponRepositoryDatabase(connection);

})

test("Deve fazer um pedido", async function () {
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const PlaceOrderInput = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        coupon: "VALE20",
        issueDate: new Date("2022-03-01T10:00:00")
    };
    const outupt = await placeOrder.execute(PlaceOrderInput);
    expect(outupt.total).toBe(5132);
})

test("Deve fazer um pedido calculando código", async function () {    
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const PlaceOrderInput = {
        cpf: "935.411.347-80",
        orderItems:[
            {idItem: 1, quantity: 1},
            {idItem: 2, quantity: 1},
            {idItem: 3, quantity: 3}
        ],
        coupon: "VALE20",
        issueDate: new Date("2022-03-01T10:00:00")
    };
    
    const outupt = await placeOrder.execute(PlaceOrderInput);
    expect(outupt.code).toBe("202200000001");
})

afterEach(async function () {
    await connection.close();
})