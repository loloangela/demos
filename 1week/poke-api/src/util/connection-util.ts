import { Pool } from 'pg';

export const connectionPool = new Pool({
  user: process.env['POKIE_DB_USERNAME'],
  host: process.env['POKIE_DB_URL'] || 'localhost',
  database: 'postgres',
  password: process.env['POKIE_DB_PASS'],
  port: 5432,
  max: 3 // max number of connections
});