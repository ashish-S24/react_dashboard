import React from 'react'
import { ringc_hart } from '../assets';
function ProductCard() {
  return (
    <div className="lg:col-span-1 col-span-2  bg-white flex flex-col justify-evenly w-full h-full p-6 py-3 rounded-3xl shadow-lg border-[2px] border-gray-200">
        <div className="flex justify-between items-center sm:px-5">
            <p className="text-[16px] lg:text-[18px] font-mont font-bold">Top products</p>
            <p className="sm:text-[14px] text-[10px] text-black text-opacity-40 font-mont">May - June 2023</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-start  xl:justify-center justify-around sm:px-4">
            <div className="flex items-center justify-center md:justify-normal">
                <img className='md:w-[150px] md:h-[150px] w-[120px] h-[120px]' src={ringc_hart}></img>
            </div>
            <div className="grid grid-cols-4 sm:gap-4 lg:ml-16 mt-3 sm:mt-[0]">
                <span className="flex-col col-span-2 sm:col-span-4">
                    <div className='flex items-center'>
                        <div className="bg-vector_bg_1 w-[10px] h-[10px] rounded-full"></div>
                        <p className="ml-2 sm:text-[14px] text-[13px] font-mont font-bold">Basic Tees</p>
                    </div>
                    <p className="text-[11px] font-lato text-gray-400 ml-5">55%</p>
                </span>
                <span className="flex flex-col col-span-2 sm:col-span-4">
                    <div className='flex items-center'>
                        <div className="bg-vector_bg_5 w-[10px] h-[10px] rounded-full"></div>
                        <p className="ml-2 sm:text-[14px] text-[13px] font-mont font-bold">Custom Short Pants</p>
                    </div>
                    <p className="text-[11px] font-lato text-gray-400 ml-5">31%</p>
                </span>
                <span className="flex flex-col col-span-2 sm:col-span-4">
                    <div className='flex items-center'>
                        <div className="bg-vector_bg_3 w-[10px] h-[10px] rounded-full"></div>
                        <p className="ml-2 sm:text-[14px] text-[13px] font-mont font-bold">Super Hoodies</p>
                    </div>
                    <p className="text-[11px] font-lato text-gray-400 ml-5">14%</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;