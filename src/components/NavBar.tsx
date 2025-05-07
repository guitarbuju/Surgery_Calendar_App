
import Link from "next/link"


const NavBar = () => {
  return (
    <div className="flex flex-col text-xs  md:text-lg  md:flex-row md:gap-4  border-b">
        <Link href="/">
        <span className=" font-semibold hover:underline hover:text-white">Home</span> 
        </Link>
        <Link href="/calendar">
        <span  className=" font-semibold hover:underline hover:text-white">Calendar</span> 
        </Link>
        <Link href="/insert_event">
        <span className=" font-semibold hover:underline hover:text-white">Insert Event</span> 
        </Link>
       
    </div>
    

  )
}

export default NavBar