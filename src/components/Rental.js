import React from 'react'
import { FaStar } from "react-icons/fa";

const Rental = ({title, image, price}) => {
    return (
        <div className="">
        <div className='relative' >
        <div className="grad object cover absolute w-full h-full rounded-[1.2rem]">

</div>
<div className="flex">
    
    <img src={image} alt="" className='oject-cover  rounded-[1.2rem] sm:max-h-[18rem]' />
    <div className="absolute flex items-baseline text-white font-bold bottom-3 left-6 text-[20px] gap-4 ">{title}<p className='text-yellow-300 text-[18px]'> {price}</p></div>
</div>
        </div>
        <div className="pt-2 pl-2 flex items-start justify-between ">
            <div className="">
            <p className='text-[14px] text-gray-600 max-w-[16rem]'>An ideal location for mountain-lovers.</p>
        <p className='text-[12px] font-semibold  text-gray-600 '>Mar 29- Apr 6</p></div>
        <div className="flex items-center gap-1 mr-1.5 text-[17px]"><FaStar color='#6833e6'/><p className='text-semibold'>5.0</p></div>
        </div>
        </div>
    ) 
}

export default Rental