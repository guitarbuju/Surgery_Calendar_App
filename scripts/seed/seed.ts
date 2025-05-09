import pool from "@/db/dbConnection";
import dayjs from "dayjs";
import { seedDoctors, seedPatients } from "./seedPeople";
import { clearDatabase } from "./clearDataBase";

export const seedData = async () => {
  const Starting = (startHour: number, daysAfter: number = 0) => {
    const starter = dayjs()
      .startOf("day")
      .add(daysAfter, "day")
      .add(startHour, "hour");

    return {
      starter,
      ending: starter.add(2, "hour").toISOString(),
    };
  };

  const insertData = [
    (() => {
      const { starter, ending } = Starting(8); // Today at 8 AM
      return {
        doctor_id: 1,
        patient_id: 1,
        message: "Today 8 AM",
        start_date: starter.toISOString(),
        finish_date: ending,
      };
    })(),
    (() => {
      const { starter, ending } = Starting(10);
      return {
        doctor_id: 2,
        patient_id: 2,
        message: "Today 10 AM",
        start_date: starter.toISOString(),
        finish_date: ending,
      };
    })(),
    (() => {
      const { starter, ending } = Starting(10, 1);
      return {
        doctor_id: 3,
        patient_id: 3,
        message: "Tomorrow 10 AM",
        start_date: starter.toISOString(),
        finish_date: ending,
      };
    })(),
    (() => {
      const { starter, ending } = Starting(10, 2);
      return {
        doctor_id: 4,
        patient_id: 4,
        message: "Day after tomorrow 10 AM",
        start_date: starter.toISOString(),
        finish_date: ending,
      };
    })(),
    (() => {
      const { starter, ending } = Starting(14);
      return {
        doctor_id: 5,
        patient_id: 5,
        message: "Today 2 PM",
        start_date: starter.toISOString(),
        finish_date: ending,
      };
    })(),
  ];

  for (const event of insertData) {
    try {
      await pool.query(
        `INSERT INTO events (doctor_id, patient_id, message, start_date, finish_date)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          event.doctor_id,
          event.patient_id,
          event.message,
          event.start_date,
          event.finish_date,
        ]
      );
    } catch (error) {
      console.error(error);
    }
  }
};

async function main() {
  await clearDatabase();
  await seedPatients();
  await seedDoctors();
  await seedData();
  console.log("✅ Seeding completed.");
}

main().catch((err) => {
  console.error("❌ Seeding failed:", err);
});
