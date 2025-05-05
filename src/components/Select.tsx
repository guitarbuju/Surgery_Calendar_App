"use client";

import { getDoctor, getPatient } from "@/app/actions/getDataForSelect";
import { useEffect, useState } from "react";
import { People } from "@/lib/types";
import { SelectDoctorProps } from "@/lib/types";

export const SelectDoctor = ({ register, name }: SelectDoctorProps) => {
  const [doctors, setDoctors] = useState<People[] | undefined>([]);

  useEffect(() => {
    const retrieveDoctor = async () => {
      const retrivedDoctors = await getDoctor();
      setDoctors(retrivedDoctors.data);
    };
    retrieveDoctor();
  }, []);

  return (
    <div>
      <select {...register(name)} className="select">
        {" "}
        <option>click here to select</option>
        {doctors?.map((dr, index) => (
          <option key={index} value={dr.doctor_id}>
            {dr.doctor}
          </option>
        ))}
      </select>
    </div>
  );
};

export const SelectPatient = ({ register, name }: SelectDoctorProps) => {
  const [patient, setPatient] = useState<People[] | undefined>([]);

  useEffect(() => {
    const retrievePatient = async () => {
      const patients = await getPatient();
      setPatient(patients.data);
    };
    retrievePatient();
  }, []);

  return (
    <div>
      <select {...register(name)} className="select">
      <option>click here to select</option>
        {patient?.map((patient, index) => (
          <option key={index} value={patient.patient_id}>
            {patient.patient}
          </option>
        ))}
      </select>
    </div>
  );
};
