
import RegisterForm from "@/components/RegisterForm";
import CarouselSlider from "../components/CarouselSlider";


export default function Home() {
  return (
    <div className="lg:flex justify-between items-center min-h-[80vh]">
      <div className=" flex flex-col justify-center items-center  sm:pl-10 gap-4">
        <div className="flex flex-col items-center "> 
          
          <div className="flex flex-col items-start">
            <h1 className="scroll-m-20 text-5xl text-start font-bold tracking-tight text-slate-700 ">
            Welcome
          </h1>
          <p className="scroll-m-20 text-md text-start  tracking-tight text-slate-600 ">
            please register your user
          </p>
          <p className="scroll-m-20 text-md text-start  tracking-tight text-slate-600 ">
            flick the switch to enter doctors or staff members.
          </p>
          </div>
         
        </div>

        <RegisterForm />
      </div>
      <div>
         <CarouselSlider />
      </div>
    
    </div>
  );
}
