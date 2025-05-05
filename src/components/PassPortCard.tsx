"use client";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "./ui/badge";
import { CalendarEvent } from "@/lib/types";
import { DialogPop } from "./DialogPop";
import dayjs from "dayjs";


const PassPortCard = ({
  events,
  refreshEvents,
}: {
  events: CalendarEvent[];
  refreshEvents: () => void;
}) => {
  const today = dayjs(); // using dayjs for easier date comparisons

  return (
    <div className="flex flex-col items-center justify-center whitespace-nowrap rounded-md border">
      <h1 className="text-2xl">
        Today&apos;s Patients <span>{today.format("MM/DD/YYYY")}</span>
      </h1>
      {events?.map((e) => {
        const isToday = dayjs(e.start).isSame(today, "day"); // 🔑 checks if start is today

        return (
          <ol className="mb-2" key={e.id}>
            <li>
              <Card className={`w-96 ${isToday ? "bg-[#3175ac] text-white" : ""}`}>
                <CardHeader>
                  <CardTitle>
                    <Badge>{e.id}</Badge> Surgical Appointment
                  </CardTitle>
                  <CardDescription className="flex justify-between">
                    Doctor: {e.resource.doctorName}
                  </CardDescription>
                  <CardContent className={`max-h-[40pxx] ${isToday ? " text-white" : " text-slate-400"}`}>
                    <div className="flex ">
                      Patient: {e.resource.patientName}
                    </div>
                    <div className="text-xs">
                      {e.resource.message}
                    </div>
                  </CardContent>
                </CardHeader>
                <CardFooter className="flex justify-between gap-3 text-xs text-slate-400">
                  <div className={`flex flex-col items-start ${isToday ? " text-white" : " text-slate-400"}`}>
                    <div>
                      Start: {dayjs(e.start).format("YYYY-MM-DD HH:mm")}
                    </div>
                    <div>
                      End: {dayjs(e.end).format("YYYY-MM-DD HH:mm")}
                    </div>
                  </div>
                  <DialogPop id={e.id} onSuccess={refreshEvents} />
                </CardFooter>
              </Card>
            </li>
          </ol>
        );
      })}
    </div>
  );
};

export default PassPortCard;