import Connection from "../../../infra/database/Connection";
import GetItemOutput from "./GetItemOutput";

export default class GetItemsQuery {

    constructor(readonly connection : Connection){}

    async execute() : Promise<GetItemOutput[]> {
        const itemsData = await this.connection.query("select * from ccca.item", []);
        const getItemsOutput : GetItemOutput[] = [];
        for (const itemData of itemsData) {
            getItemsOutput.push(new GetItemOutput(itemData.idItem, itemData.description, parseFloat(itemData.price)));
        }
        return getItemsOutput;
    }
}