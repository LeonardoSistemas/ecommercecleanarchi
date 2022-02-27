import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usercase/PlaceOrder";

test("Deve fazer um pedido", function () {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const PlaceOrderInput = {
        cpf: "935.411.347-80",
        orderItems:[
            {idItem: 1, quantity: 1},
            {idItem: 2, quantity: 1},
            {idItem: 3, quantity: 3}
        ],
        coupon: "VALE20"
    };
    const outupt = placeOrder.execute(PlaceOrderInput);
    expect(outupt.total).toBe(4872);
})