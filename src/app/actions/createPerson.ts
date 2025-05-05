"use server";
import pool from "@/db/dbConnection";
import { RegisterFormData } from "@/lib/types";
import bcrypt from "bcryptjs";

export async function createPerson(data: RegisterFormData) {
  try {
    const { doctor, isDoctor, email, password } = data;
    const checkRepeatedMail =
      "SELECT * FROM doctors WHERE email = $1 OR doctor =$2";

    const result = await pool.query(checkRepeatedMail, [email, doctor]);
    if (result.rows.length > 0) {
      return {
        success: false,
        message: "Email or Doctor already exists in the database",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password: ", hashedPassword);

    const insertData =
      "INSERT INTO doctors( doctor,is_doctor ,email,password ) VALUES ($1, $2,$3,$4) RETURNING *";
    const resultedInsert = await pool.query(insertData, [
      doctor,
      isDoctor,
      email,
      hashedPassword,
    ]);

    return { success: true, data: resultedInsert.rows[0] };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error inserting data" };
  }
}
