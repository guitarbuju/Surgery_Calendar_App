"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "@/lib/types";
import { AvatarIcon, BackpackIcon } from "@radix-ui/react-icons";
import { createPerson } from "@/app/actions/createPerson";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<RegisterFormData>();

  const [isDoctor, setIsDoctor] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsDoctor(checked);
    console.log(isDoctor);
  };

  const onSubmit = async (data: RegisterFormData) => {
    const completeData = { ...data, isDoctor };
    console.log(completeData);
    const response = await createPerson(completeData);
    if (response?.success) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form");
    }
    reset();
  };

  return (
    <div className="bg-card-cool w-80 p-4 rounded-xl">
      <h1>Register:</h1>
      <div className="flex items-center space-x-2 ">
        <Label>Staff:</Label>
        <AvatarIcon />
        <Switch
          id="Dr"
          checked={isDoctor}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="Dr">Dr:</Label>
        <BackpackIcon />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Username :</Label>

        <Input
          type="text"
          id="doctor"
          {...register("doctor", { required: true })}
        />
        <Label>Password:</Label>
        <Input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />

        <Label>Email:</Label>
        <Input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />

        <div className="flex justify-around gap-2 ">
          <Button type="submit" className="mt-2 ">
            Submit
          </Button>
          <Button variant="outline" type="reset" className="mt-2">
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
