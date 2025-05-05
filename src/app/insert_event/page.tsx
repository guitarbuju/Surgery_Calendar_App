import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import InputForm from '@/components/InputForm';
import PassPortCard from '@/components/PassPortCard';
  
const page = () => {
  return (
    <div className="flex justify-center align-center p-6">
      
    <Card className="h-full max-w-[800px]">
      <CardHeader>
        <CardTitle>Create Event Form</CardTitle>
        <CardDescription>Insert Dr, Patient and description:</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        <InputForm/>
      </CardContent>
      <CardFooter className="p-4">
          Remember reviewing your data before submit..
      </CardFooter>
    </Card>
    
  </div>
  )
}

export default page