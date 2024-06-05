import React from 'react'
import logo from '../assets/airbnb.png'
import { BiWorld } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { TbHomeSearch } from "react-icons/tb";
const Navbar = () => {
    return ( 
        <div className="border-b">
    <div className="flex fixed z-10 bg-white justify-between w-full pr-10 items-center sm:mx-6 md:mx-8 lg:mx-10">
        {/*left*/}
        <div className="flex h-16 ">
           <img src={logo} className="object-cover"/> 

        </div>
         {/*middle*/}
        <div className="hidden md:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
            <input type="search" placeholder="" className='py-2.5 w-[20rem] rounded-full outline-0'/>
            <div className="flex justify-between w-full absolute pl-7 pr-4 font-semibold text-gray-700">
                <button>Location</button>
                <pr>|</pr>
                <button>Date</button>
                <pr>|</pr>
                <button>Price</button>
                <div className="bg-[#6833e6] p-2 rounded-full">
            <TbHomeSearch className='text-white bold size-4'/>
            </div>
            </div>
           
        </div>
        {/* right */}
        <div className="flex justify-center items-center font-semibold text-gray-700 pr-4">
       
        <BiWorld className='text-[17px]'/>
        <p className='mr-4 ml-1 text-[17px] font-semibold'>EN</p>
        <div className="text-white flex items-center gap-4 border p-2 rounded-full outline-0 w-[7rem] font-semibold shadow-md bg-[#6833e6] hover:bg-[#7e54fc] duration-75 ease-out pl-4">
        <p>Sign In</p>
        <BsPersonCircle/>
        </div>

        </div>

        </div>
        </div>
    )
}

export default Navbar