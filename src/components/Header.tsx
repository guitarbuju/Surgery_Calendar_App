import Image from "next/image";
import React from "react";
import logo from "@/public/logo_positivo.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="w-screen  md:h-24 left-0 top-0 flex justify-between p-2  bg-[#3175ac] text-slate-300">
      <div className="flex justify-around items-center align-middle h-42 ">
        <Image src={logo} alt="main image" className=" w-12 mr-2" />
        <h1 className="scroll-m-20 text-3xl  font-extrabold tracking-tight lg:text-5xl ">
          {" "}
          Surgical Room Scheduler
        </h1>
      </div>
      <div className="flex justify-around items-center pt-1 mr-4 gap-1">
        <NavBar />
       
      </div>
    </div>
  );
};

export default Header;
