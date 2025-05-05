"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CalendarEvent, ItemProps } from "@/lib/types";

const localizer = dayjsLocalizer(dayjs);

const BigCalendar = ({ events }: { events: CalendarEvent[] }) => {
  
  const components = {
    event: (props: ItemProps) => {
      console.log(props);
      return (
        <div className="flex gap-4 ">
          <div className=" font-bold">{props.title}</div>
          <span>{props.event?.resource?.message}</span>
        </div>
      );
    },
  };
  const minTime = dayjs()
    .set("hour", 7)
    .set("minute", 0)
    .set("second", 0)
    .toDate(); // 7 AM
  const maxTime = dayjs()
    .set("hour", 23)
    .set("minute", 0)
    .set("second", 0)
    .toDate(); // 3 PM (8 hours later)

  return (
    <div className="flex justify-center items-center ">
   

      <div className="rounded-xl  border border-1 border-black p-2 h-full w-full">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
          toolbar={true}
          components={components}
          defaultView="week"
          style={{ height: 700, fontFamily: "Roboto", fontSize: "15px" }}
          min={minTime}
          max={maxTime}
        />
      </div>
    </div>
  );
};

export default BigCalendar;
