import pg from 'pg';

/* const {Client} = pg;
const client = new Client;
client.connect().query().end() */

const {Pool} = pg;

const pool = new Pool();

export default pool;