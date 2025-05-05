"use server";

import pool from "@/db/dbConnection";
import { FormData } from "@/lib/types";

// Server action to handle form submission and insert into DB
export async function updateData(data: FormData) {
  const { id, start_date, finish_date } = data;
  console.log("to be updated", data);

  try {
    const query = `
        UPDATE events
        SET start_date = $1, finish_date = $2
        WHERE id = $3
        RETURNING *;

      `;

    const result = await pool.query(query, [start_date, finish_date, id]);
    console.log("Updated data:", result.rows[0]);

    return { success: true, data: result.rows[0] };
  } catch (error) {
    console.error("Error inserting data:", error);
    return { success: false, error: "Error updating data" };
  }
}
