

import { initializeDatabase } from "@/db/createDb";

const initDb = async () => {
  console.log('Initializing Database...');
  await initializeDatabase();
  console.log('Database Initialized');
};


initDb().catch((error) => {
  console.error('Error initializing database:', error);
  process.exit(1); 
});