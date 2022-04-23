import GetItemsQuery from "../../src/application/query/get-items/GetItemsQuery";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";

let connection: Connection;

beforeEach(async function () {
	connection = new PostgreSQLConnectionAdapter();
});

test("Deve obter os itens", async function () {	
	const getItems = new GetItemsQuery(connection);
	const items = await getItems.execute();
	expect(items).toHaveLength(3);
});

test("Deve obter os itens com o preço formatado", async function () {	
	const getItems = new GetItemsQuery(connection);
	const items = await getItems.execute();
	expect(items).toHaveLength(3);
});

afterEach(async function () {
	await connection.close();
});
