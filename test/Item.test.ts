import Dimension from "../src/Dimension";
import Item from "../src/Item"

test("Deve criar um item com dimensões", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10));
    const volume = item.getVolume();
    expect(volume).toBe(0.03);
})