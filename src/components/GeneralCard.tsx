

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from"@/components/ui/card";
import { GeneralCardProps } from "@/lib/types";

import React from 'react'

const GeneralCard :React.FC<GeneralCardProps> = ( { title, description, footerText, children } ) => {
  return(
    <Card className="w-full" >
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex justify-center align-middle max-h-[400px] overflow-scroll" >
    {children}
    </CardContent>
    <CardFooter >
      {footerText}
    </CardFooter>
  </Card>
  )

  
}

export default GeneralCard 