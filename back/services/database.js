import "dotenv/config";
import pg from 'pg';

const { Client } = pg;

const connectionString = process.env.PGURL;

const client = new Client({ connectionString });
await client.connect();

export default client;
