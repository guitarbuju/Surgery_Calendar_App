"use client";
import BigCalendar from "@/components/BigCalendar";
import PassPortCard from "@/components/PassPortCard";
import dayjs from "dayjs";
import { CalendarEvent } from "@/lib/types";
import { useEffect, useState } from "react";
import { calendarData } from "../actions/getDataForCalendar";

const Page = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const fetchEvents = async () => {
    const response = await calendarData();

    if (response.success) {
      const mapped = (response.data ?? []).map((event) => ({
        id: event.id,
        title: `Dr. ${event.dr_name} Patient: ${event.patient_name}`,
        start: dayjs(event.start_date).toDate(),
        end: dayjs(event.finish_date).toDate(),
        resource: {
          doctorId: event.doctor_id,
          doctorName: event.dr_name,
          patientId: event.patient_id,
          patientName: event.patient_name,
          message: event.message,
        },
      }));
      setEvents(mapped);
      console.log('events',mapped);
    } else {
      console.error(response.error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="flex flex-col  justify-center md:flex-row gap-4 mt-4 pb-4">
      <div className="w-full h-full sm:max-h-[730px] overflow-scroll md:w-1/2">
        <PassPortCard events={events} refreshEvents={fetchEvents} />
      </div>
      <div className="hidden w-full sm:block h-full">
        <BigCalendar events={events} />
      </div>
    </div>
  );
};

export default Page;
