import pool from "@/db/dbConnection";


export const clearDatabase = async () => {
  try {
   
    await pool.query('SET session_replication_role = replica;'); // Temporarily disable foreign key checks (PostgreSQL)

    
    await pool.query('DELETE FROM events;');

    await pool.query('DELETE FROM doctors;');

    await pool.query('DELETE FROM patients;');

    
    await pool.query('ALTER SEQUENCE events_id_seq RESTART WITH 1;');
    await pool.query('ALTER SEQUENCE doctors_id_seq RESTART WITH 1;');
    await pool.query('ALTER SEQUENCE patients_id_seq RESTART WITH 1;');
    
    
    await pool.query('SET session_replication_role = DEFAULT;');

    console.log("✅ Database cleared.");
  } catch (error) {
    console.error("❌ Error clearing database:", error);
  }
};
