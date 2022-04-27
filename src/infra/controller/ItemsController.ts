import GetItemsQuery from "../../application/query/get-items/GetItemsQuery";
import GetItemsQueryPresenter from "../../application/query/get-items/GetItemsQueryPresenter";
import Connection from "../database/Connection";

export default class OrdersController {

	constructor (readonly connection: Connection, readonly presenter: GetItemsQueryPresenter) {
	}

	async getItems () : Promise<GetItemsQueryPresenter> {
		const getItens = new GetItemsQuery(this.connection, this.presenter);
		await getItens.execute();
		return this.presenter;
	}
}