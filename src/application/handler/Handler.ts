import DomainEvent from "../../domain/event/DomainEvents";

export default interface Handler {
    name : string;
    handle (event : DomainEvent) : Promise<void>;
}