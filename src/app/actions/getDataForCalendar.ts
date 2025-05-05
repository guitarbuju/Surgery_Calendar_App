"use server";
import pool from "@/db/dbConnection";

export const calendarData = async () => {
  try {
    const query = `SELECT events.*, 
       doctors.doctor AS dr_name, 
       patients.patient AS patient_name,
       to_char(events.start_date, 'YYYY-MM-DD"T"HH24:MI:SSOF') AS start_date_iso,
       to_char(events.finish_date, 'YYYY-MM-DD"T"HH24:MI:SSOF') AS finish_date_iso 
FROM events
JOIN doctors ON events.doctor_id = doctors.doctor_id
JOIN patients ON events.patient_id = patients.patient_id
WHERE events.start_date >= NOW()
ORDER BY events.start_date ASC;

`;

    const result = await pool.query(query);

    return { success: true, data: result.rows };
  } catch (error) {
    console.error("Error getting data:", error);
    return { success: false, error: "Error getting data" };
  }
};
export const todayCalendarData = async () => {
  try {
    const query = `SELECT events.*, 
       doctors.doctor AS dr_name, 
       patients.patient AS patient_name,
       to_char(events.start_date, 'YYYY-MM-DD"T"HH24:MI:SSOF') AS start_date_iso,
       to_char(events.finish_date, 'YYYY-MM-DD"T"HH24:MI:SSOF') AS finish_date_iso 
FROM events
JOIN doctors ON events.doctor_id = doctors.doctor_id
JOIN patients ON events.patient_id = patients.patient_id
WHERE DATE(events.start_date) = CURRENT_DATE;
`;

    const result = await pool.query(query);

    return { success: true, data: result.rows };
  } catch (error) {
    console.error("Error getting data:", error);
    return { success: false, error: "Error getting data" };
  }
};

