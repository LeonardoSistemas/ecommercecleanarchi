import Item from "./Item";

export default class Freight {
    private total: number;
    private DISTANCE = 1000;
    private FREIGHTMIN = 10;
    constructor() {
        this.total = 0;
    }

    addItem(item: Item, quantity: number) {
        this.total += (item.getVolume() * this.DISTANCE * (item.getDensity() / 100)) * quantity;
    }

    getTotal(){
        return this.total > 0 && this.total < this.FREIGHTMIN ? this.FREIGHTMIN : this.total;
    }
}