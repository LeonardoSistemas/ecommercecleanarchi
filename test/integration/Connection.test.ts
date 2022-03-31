import PostgresSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";

test("Deve testar a conexão com o banco de dados", async function (){
    const connection = new PostgresSQLConnectionAdapter();
    const items = await connection.query("select * from ccca.item", []);
    expect(items).toHaveLength(3);
    await connection.close();
})