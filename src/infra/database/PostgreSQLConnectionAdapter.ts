import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgresSQLConnectionAdapter implements Connection {
    connection: any;

    constructor(){
        this.connection = pgp()("postgres://postgres:lct147258@localhost:5432/cursobranas");
    }

    query(stmt: string, params: any): Promise<any> {
        return this.connection.query(stmt, params);
    }

    async close(): Promise<void> {
		this.connection.$pool.end();
	}
}