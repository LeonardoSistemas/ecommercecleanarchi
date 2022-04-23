import Order from "../entity/Order";
import DomainEvent from "./DomainEvents";

export default class OrderPlaced implements DomainEvent {
    name = "OrderPlaced";

    constructor (readonly order : Order) {        
    }
}