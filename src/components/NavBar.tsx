import { Badge } from "@/components/ui/badge"
import Link from "next/link"


const NavBar = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:justify-around gap-1 ">
        <Link href="/">
        <Badge variant="outline" >Home</Badge> 
        </Link>
        <Link href="/calendar">
        <Badge variant="outline" >Calendar</Badge> 
        </Link>
        <Link href="/insert_event">
        <Badge variant="outline">Insert Event</Badge> 
        </Link>
       
    </div>
    

  )
}

export default NavBar