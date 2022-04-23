import StockEntry from "../entity/StockEntry";

export default interface stockEntryRepository {
    save(stockEntry: StockEntry) : Promise<void>;
    getAll(idItem: number) : Promise<StockEntry[]>;
    clear() : Promise<void>;
}