
import Image from "next/image";
import logo from "@/public/logo.png";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    
     <div className="lg:flex justify-around ">
      <div className=" flex justify-center align-middle p-10">
        <RegisterForm/>
      </div>
       
       
        <Image src={logo} alt="" width={650} className="hidden lg:block"/>
    
     </div>
      
          
    
  );
}
