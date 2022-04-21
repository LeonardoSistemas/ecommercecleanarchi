import StockEntry from "../../../domain/entity/StockEntry";
import stockEntryRepository from "../../../domain/repository/StockEntryRepository";

export default class StockEntryRepositoryMemory implements stockEntryRepository {
   stockEntries: StockEntry[];

    constructor(){
        this.stockEntries = [];
    }    
    async save(stockEntry: StockEntry): Promise<void> {
        this.stockEntries.push(stockEntry);
    }
    async getAll(idItem: number): Promise<StockEntry[]> {
        return this.stockEntries.filter(stockEntry => stockEntry.idItem === idItem);
    }

    async clear(): Promise<void> {
        this.stockEntries = [];
    }
}