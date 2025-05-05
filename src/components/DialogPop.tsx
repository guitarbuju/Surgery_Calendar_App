'use client'
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/lib/types";
import { updateData } from "@/app/actions/updateDataForCalendar";
import { useState } from "react";

export function DialogPop({
  id,
  onSuccess,
}: {
  id: number;
  onSuccess: () => void;
}) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    const idData= {...data,id};
    const response = await updateData(idData); 
    console.log(data);
    if (response.success) {
      alert("Form submitted successfully!");
      setOpen(false);  
      onSuccess();
    } else {
      alert("Error submitting form");
    }
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Update Surgery</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reeschedule Surgery</DialogTitle>
          <DialogDescription>
            Make changes to your appointment. Click save when youre done.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4 py-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex  items-center gap-4 w-60">
            <Label htmlFor="start_date">Start Date</Label>
            <Input
              type="datetime-local"
              id="start_date"
              placeholder="Start Date"
              {...register("start_date", { required: true })}
            />
          </div>
          <div className="flex  items-center gap-4 w-60">
            <Label htmlFor="finish_date">Start Date</Label>
            <Input
              type="datetime-local"
              id="finish_date"
              placeholder="Finish Date"
              {...register("finish_date", { required: true })}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
