import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface FormData {
  id?: number | string
  doctor_id: number;
  patient_id: number;
  start_date: string;
  finish_date: string;
  message: string;
}

export interface RegisterFormData{
  doctor:string;
  password:string;
  isDoctor?:boolean;
  email:string;
}

export interface People {
  doctor: string;
  patient: string;
  doctor_id: number;
  patient_id:number;
}

export interface SelectDoctorProps {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
 
  
}

export interface GeneralCardProps {
  title: string;
  description: string;
  content?:string;
  footerText?: string;
  children?: ReactNode;
}
export interface MappedEvent {
  id: number;
  text: string;
  dr:string;
  patient:string;
  start: string; 
  end: string;    
  sortStart: Date; 
}

export interface CalendarEvent {
  id:  number;       
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;    
  dr_name?:string;
  patient_name?:string;
  message?:string;
  start_date_iso:string;
  finish_date_iso:string;
          
}

export interface ItemProps{
  title:string
  event?: any
}

