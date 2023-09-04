import React from 'react'

function TopCards() {
  return (
    <div className="grid sm:md:grid-cols-4 gap-4 w-full h-full">
        <div className="lg:col-span-1 sm:md:col-span-2 bg-white flex flex-col p-6 py-3 sm:py-3 justify-center rounded-3xl shadow-lg border-[2px] border-gray-200">
            <div className='flex flex-col'>
                <div className=''>
                    <div className="rounded-full bg-vector_bg_1 sm:w-[38px] sm:h-[38px] w-[28px] h-[28px] flex justify-center items-center">
                        <img className='h-[16px] w-[16px] sm:h-[21px] sm:w-[21px]' src='src/assets/Vector (2).png'></img>
                    </div>
                </div>
                <div className='mt-1'>
                    <p className="text-[10px] font-lato">Total Revenues </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1">
                    <p className="sm:text-[18px] text-[16px] font-opensans font-bold">$2,129,430</p>
                    <p className="flex justify-center items-center  rounded-3xl w-[47px] h-[22px] font-figtree text-[10px] font-semibold text-supporative bg-label_bg"> 
                    <span>+2.5% </span></p>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1 sm:md:col-span-2 bg-white flex flex-col p-6 py-3 sm:py-3 justify-center rounded-3xl shadow-lg border-[2px] border-gray-200">
            <div className='flex flex-col'>
                <div className=''>
                    <div className="rounded-full bg-vector_bg_2 sm:w-[38px] sm:h-[38px] w-[28px] h-[28px] flex justify-center items-center">
                        <img className='h-[16px] w-[16px] sm:h-[21px] sm:w-[21px]' src='src/assets/transaction_icon.png'></img>
                    </div>
                </div>
                <div className='mt-1'>
                    <p className="text-[10px] font-lato">Total Transaction </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1">
                    <p className="sm:text-[18px] text-[16px] font-opensans font-bold">1,520</p>
                    <p className="flex justify-center items-center  rounded-3xl w-[47px] h-[22px] font-figtree text-[10px] font-semibold text-supporative bg-label_bg"> 
                    <span>+1.7% </span></p>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1 sm:md:col-span-2 bg-white flex flex-col p-6 py-3 sm:py-3 justify-center rounded-3xl shadow-lg border-[2px] border-gray-200">
            <div className='flex flex-col'>
                <div className=''>
                    <div className="rounded-full bg-vector_bg_3 sm:w-[38px] sm:h-[38px] w-[28px] h-[28px] flex justify-center items-center">
                        <img className='h-[16px] w-[16px] sm:h-[21px] sm:w-[21px]' src='src/assets/Vector (3).png'></img>
                    </div>
                </div>
                <div className='mt-1'>
                    <p className="text-[10px] font-lato">Total Likes </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1">
                    <p className="sm:text-[20px] text-[16px] font-opensans font-bold">9,721</p>
                    <p className="flex justify-center items-center  rounded-3xl w-[47px] h-[22px] font-figtree text-[10px] font-semibold text-supporative bg-label_bg"> 
                    <span>+1.4% </span></p>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1 sm:md:col-span-2 bg-white flex flex-col p-6 py-3 sm:py-3 justify-center rounded-3xl shadow-lg border-[2px] border-gray-200">
            <div className='flex flex-col'>
                <div className=''>
                    <div className="rounded-full bg-vector_bg_4 sm:w-[38px] sm:h-[38px] w-[28px] h-[28px] flex justify-center items-center">
                        <img className='h-[14px] w-[16px] sm:h-[18px] sm:w-[21px]' src='src/assets/Vector (4).png'></img>
                    </div>
                </div>
                <div className='mt-1'>
                    <p className="text-[10px] font-lato">Total Users </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1">
                    <p className="sm:text-[20px] text-[16px] font-opensans font-bold">9,721</p>
                    <p className="flex justify-center items-center  rounded-3xl w-[47px] h-[22px] font-figtree text-[10px] font-semibold text-supporative bg-label_bg"> 
                    <span>+4.2%</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCards;