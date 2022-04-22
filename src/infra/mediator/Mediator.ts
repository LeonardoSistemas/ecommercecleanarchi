import Handler from "../../application/handler/Handler";
import DomainEvent from "../../domain/event/DomainEvents";

export default class Mediator {
    handlers: Handler[];

    constructor() {
        this.handlers = [];
    }

    register (handler: Handler) {
        this.handlers.push(handler);
    }

    async publish(event : DomainEvent) {
        for (const handle of this.handlers) {
            if(handle.name === event.name) {
                await handle.handle(event);
            }
        }
    }
}