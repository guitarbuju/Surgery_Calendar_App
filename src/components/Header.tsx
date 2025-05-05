import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import fb from "@/public//icons8-facebook-50.png"
import ig from "@/public/icons8-instagram-64.png"
import x from "@/public/icons8-twitter-30.png"
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='w-screen  h-28 lg:h-12 left-0 top-0 flex justify-between p-2 border-2 border-neutral-300 border-y '>
        <div className='flex justify-around items-center align-middle'>
            <Image src={logo} alt='main image'
            className='h-20 w-20'/>
            <h1
            className=' text-4xl text-slate-600'
            > Surgical Room Scheduler</h1>
        </div>
        <div className='flex justify-around pt-1 mr-4 gap-1'>
            <NavBar/>
            <div className='flex flex-col sm:flex-row'>
              <Image src={fb} alt='fb image' className='h-5 w-5'/>
        <Image src={ig} alt='ig image' className='h-5 w-5'/>
        <Image src={x} alt='x image' className='h-5 w-5'/> 
            </div>
       
        </div>
    </div>
  )
}

export default Header