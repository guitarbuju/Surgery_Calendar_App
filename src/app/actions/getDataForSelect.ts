"use server";
import pool from "@/db/dbConnection";

export const getDoctor = async () => {
  try {
    const query = "SELECT doctor, doctor_id FROM doctors WHERE is_Doctor  = TRUE";

    const result = await pool.query(query);

    return { success: true, data: result.rows };
  } catch (error) {
    console.error("Error getting data:", error);
    return { success: false, error: "Error getting data" };
  }
};

export const getPatient = async () => {
  try {
    const query = "SELECT patient, patient_id FROM patients ";

    const result = await pool.query(query);

    return { success: true, data: result.rows };
  } catch (error) {
    console.error("Error getting data:", error);
    return { success: false, error: "Error getting data" };
  }
};