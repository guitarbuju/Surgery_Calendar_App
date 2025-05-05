'use server';

import pool from "@/db/dbConnection"
import {FormData} from '@/lib/types'

// Server action to handle form submission and insert into DB
export async function insertData(data: FormData) {

 
    const { doctor_id, patient_id, start_date, finish_date, message } = data;
    console.log(data);

    try {
      const query = `
        INSERT INTO events (doctor_id, patient_id, start_date, finish_date, message)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
  
      // Use pool to execute the query
      const result = await pool.query(query, [doctor_id, patient_id, start_date, finish_date, message]);
    console.log('Inserted data:', result.rows[0]);

    // Optional: Revalidate a path if needed
    // revalidatePath('/some-path');

    return { success: true, data: result.rows[0] };
  } catch (error) {
    console.error('Error inserting data:', error);
    return { success: false, error: 'Error inserting data' };
  };
};
