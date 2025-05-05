

import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'

dotenv.config()

interface PoolConfig {
    user: string | undefined;
    host: string | undefined;
    database: string | undefined;
    password: string | undefined;
    port: number | undefined;
  }

 const poolConfig : PoolConfig = {
  user:process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
};

const pool = new Pool(poolConfig)

async function checkDBConnection() {
    try {
      const client = await pool.connect();
      const res = await client.query('SELECT NOW()');
      console.log('DB Connected:', res.rows[0]);
      client.release(); // Release the connection back to the pool
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  }
  
  // Call the function to test the connection
  checkDBConnection();

export default pool;