import React from 'react';
import { dashboard_icon, transaction_icon, schedule_icon, setting_icon, user_icon } from '../assets';

function SideBar() {
    // const navData = [
    //     {
    //         titl:"Dashboard",
    //         img:"src/assets/dashboard_icon.png"
    //     },
    //     {
    //         titl:"Transactions",
    //         img:"src/assets/transaction_icon.png"
    //     },
    //     {
    //         titl:"Schedule",
    //         img:"src/assets/schedule_icon.png"
    //     },
    //     {
    //         titl:"Users",
    //         img:"src/assets/user_icon (1).png"
    //     },
    //     {
    //         titl:"Dashboard",
    //         img:"src/assets/setting_icon.png"
    //     }
    // ]
  return (
    <div className="h-full  lg:w-[350px] md:w-[200px] w-20 blue-gradient rounded-[20px] flex flex-col justify-between">
        <div className='flex flex-col justify-start items-center'>
        <div className='mt-14 flex flex-col xl:items-start items-center xl:w-3/5'>
            <h1 className="text-[36px] font-mont font-bold text-white hidden md:block">Board.</h1>
            <h1 className="font-popp font-bold text-white md:hidden block">LOGO</h1>
        </div>
        <div className='relative mt-4 flex flex-col items-center  xl:w-3/5 '>
            <ul className='h-[300px] flex flex-col justify-evenly w-full'>
                <li className='flex flex-row  items-center'>
                    <img className="  h-[24px] w-[24px] md:h-[18px] md:w-[18px]" src={dashboard_icon}></img>
                    <span className='ml-4 tracking-wide text-[16px] font-mont font-bold text-white hidden md:block transition-all ease-in-out duration-100 cursor-pointer'>Dashboard</span>
                </li>
                <li className='flex flex-row  items-center '>
                    <img className=" h-[24px] w-[24px] md:h-[18px] md:w-[18px]" src={transaction_icon}></img>
                    <span className='ml-4 tracking-wide text-[16px] font-mont hover:font-bold text-white hidden md:block transition-all ease-in-out duration-100 cursor-pointer'>Transactions</span>
                </li>
                <li className='flex flex-row  items-center'>
                    <img className="l h-[24px] w-[24px] md:h-[18px] md:w-[18px]" src={schedule_icon}></img>
                    <span className='ml-4 tracking-wide text-[16px] font-mont hover:font-bold text-white hidden md:block transition-all ease-in-out duration-100 cursor-pointer'>Schedules</span>
                </li>
                <li className='flex flex-row  items-center'>
                    <img className=" h-[24px] w-[24px] md:h-[18px] md:w-[18px] " src={user_icon}></img>
                    <span className='ml-4 tracking-wide text-[16px] font-mont hover:font-bold text-white hidden md:block transition-all ease-in-out duration-100 cursor-pointer'>Users</span>
                </li>
                <li className='flex flex-row  items-center'>
                    <img className="h-[24px] w-[24px] md:h-[18px] md:w-[18px]" src={setting_icon}></img>
                    <span className='ml-4 tracking-wide text-[16px] font-mont hover:font-bold text-white hidden md:block transition-all ease-in-out duration-100 cursor-pointer'>Settings</span>
                </li>
            </ul>
        </div>
        </div>
        <div className="flex justify-center  mb-[50px]">
            <div className='flex flex-col w-3/5 md:text-[16px] text-[12px] text-white font-mont'>
                <span>Help</span>
                <span className='mt-2'>Contact Us</span>
            </div>
        </div>
    </div>
  )
}

export default SideBar;