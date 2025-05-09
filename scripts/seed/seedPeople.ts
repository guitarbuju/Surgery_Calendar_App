import pool from "@/db/dbConnection";
import { people } from "./peopleData";

export const seedDoctors = async () => {
    const { doctors } = people;
    const doctorIds: Record<string, number> = {};
  
    for (const doc of doctors) {
      const result = await pool.query(
        `INSERT INTO doctors (doctor, is_doctor, email, password)
         VALUES ($1, $2, $3, $4)
         RETURNING doctor_id`,
        [doc.doctor, doc.is_doctor, doc.email, doc.password]
      );
      const id = result.rows[0].doctor_id;
      doctorIds[doc.doctor] = id;
    }
    return doctorIds;
  };
  export const seedPatients = async () => {
    const { patients } = people;
    const patientIds: Record<string, number> = {};
  
    for (const pat of patients) {
      const result = await pool.query(
        `INSERT INTO patients (patient)
         VALUES ($1)
         RETURNING patient_id`,
        [pat.patient]
      );
      const id = result.rows[0].patient_id;
      patientIds[pat.patient] = id;
    }
    return patientIds;
  };
    