"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {FormData} from '@/lib/types'
import { insertData } from "@/app/actions/insertData";
import { SelectDoctor, SelectPatient } from "./Select";


// import { useRouter } from "next/router";


const InputForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  //   const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const response = await insertData(data); // Call the server action
    console.log(data);
    if (response.success) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form");
    }
    reset();
  };
  return (
    <div className="flex flex-col items-center w-full h-full">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full max-w-lg items-center gap-1.5 mb-2">
          <Label htmlFor="doctor">Choose Doctor</Label>
          <SelectDoctor register={register} name="doctor_id" />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5 mb-2">
          <Label htmlFor="patient">Choose Patient</Label>
         <SelectPatient register={register} name="patient_id"/>
        </div>

        <div className="grid w-full max-w-lg items-center gap-1.5  mb-2">
          <Label htmlFor="start_date">Start Date</Label>
          <Input
            type="datetime-local"
            id="start_date"
            placeholder="Start Date"
            {...register("start_date", { required: true })}
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5  mb-2">
          <Label htmlFor="finish_date">Finish Date</Label>
          <Input
            type="datetime-local"
            id="finish_date"
            placeholder="Finish Date"
            {...register("finish_date", { required: true })}
          />
        </div>

        <div className="grid w-full max-w-lg items-center gap-1.5 mb-2">
          <Label htmlFor="message">Text</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            {...register("message", { required: true })}
          />
        </div>
        <div className="flex justify-center align-middle gap-2">
          <Button variant="amarillo" type="submit">
            Submit
          </Button>
          <Button variant="default" type="reset">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
