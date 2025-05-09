import pool from "./dbConnection";

const createDatabase = async () => {
  const createDbQuery = `CREATE DATABASE IF NOT EXISTS "CalendarDb";`;

  try {
    
    await pool.query(createDbQuery);
    console.log('Database created or already exists');
  } catch (err) {
    console.error('Error creating database:', err);
  }
};

const createTables = async () => {
  const createTablesQuery = `
    -- Create doctors table
    CREATE TABLE IF NOT EXISTS doctors (
      doctor_id SERIAL PRIMARY KEY,
      doctor VARCHAR(255) NOT NULL,
      is_doctor BOOLEAN DEFAULT TRUE,
      email VARCHAR(255),
      password VARCHAR(255)
    );

    -- Create patients table
    CREATE TABLE IF NOT EXISTS patients (
      patient_id SERIAL PRIMARY KEY,
      patient VARCHAR(255) NOT NULL
    );

    -- Create events table
    CREATE TABLE IF NOT EXISTS events (
      event_id SERIAL PRIMARY KEY,
      doctor_id INT NOT NULL REFERENCES doctors(doctor_id),
      patient_id INT NOT NULL REFERENCES patients(patient_id),
      message TEXT,
      start_date TIMESTAMP NOT NULL,
      finish_date TIMESTAMP NOT NULL
    );
  `;

  try {
   
    await pool.query(createTablesQuery);
    console.log('Tables created or already exist');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};

export const initializeDatabase = async () => {
  try {
    await createDatabase();
    await createTables();
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};
