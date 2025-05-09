"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    
    const today = dayjs().toLocaleString();
    setCurrentTime(today);
  }, []); 

  const today = dayjs(); 

  return (
    <div className="flex flex-col items-center justify-center whitespace-nowrap rounded-md border">
      <div className="flex flex-col items-start">
        <h1 className="scroll-m-20 text-4xl text-start font-bold tracking-tight text-slate-700 ">Today&apos;s Patients</h1>
        <p className="scroll-m-20 text-md text-start tracking-tight text-slate-600 ">{currentTime}</p>
      </div>
      {events?.length > 0 ? (
        events.map((e) => {
          const isToday = dayjs(e.start).isSame(today, "day"); // 🔑 checks if start is today

          return (
            <ol className="mb-2" key={e.id}>
              <li>
                <Card className={`w-96 ${isToday ? "bg-[#3175ac] text-white" : ""}`}>
                  <CardHeader>
                    <CardTitle>
                      <Badge>{e.id}</Badge> Surgical Appointment
                    </CardTitle>
                    <CardDescription className={`flex justify-between text-white font-bold ${
                        isToday ? "text-white" : "text-slate-400"}`}>
                      Doctor: {e.resource.doctorName}
                    </CardDescription>
                    <CardContent
                      className={`max-h-[40px] ${
                        isToday ? "text-white" : "text-slate-400"
                      }`}
                    >
                      <div className="flex">
                        Patient: {e.resource.patientName}
                      </div>
                      <div className="text-xs">{e.resource.message}</div>
                    </CardContent>
                  </CardHeader>
                  <CardFooter className="flex justify-between gap-3 text-xs text-slate-400">
                    <div className={`flex flex-col items-start ${isToday ? "text-white" : "text-slate-400"}`}>
                      <div>
                        Start: {dayjs(e.start).format("YYYY-MM-DD HH:mm")}
                      </div>
                      <div>
                        End: {dayjs(e.end).format("YYYY-MM-DD HH:mm")}
                      </div>
                    </div>
                    <DialogPop
                      id={e.id}
                      onSuccess={refreshEvents}
                      start={dayjs(e.start).format("YYYY-MM-DDTHH:mm")}
                      end={dayjs(e.end).format("YYYY-MM-DDTHH:mm")}
                    />
                  </CardFooter>
                </Card>
              </li>
            </ol>
          );
        })
      ) : (
        <span>No surgeries found for the upcoming dates</span>
      )}
    </div>
  );
};

export default PassPortCard;
