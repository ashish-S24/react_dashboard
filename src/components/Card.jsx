/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function Card(props) {
    const onClick = () => {
        props.handleClick(true);
    }
    let data = [];

    data = props.formData
    
  return (
    <div className="lg:col-span-1 col-span-2 bg-white flex justify-center items-center w-full xl:p-6 px-8 lg:px-0 py-3 rounded-3xl shadow-lg border-[1.8px] border-gray-200">
       {props.childDone === false &&
        <div className="flex flex-col justify-center items-center sm:py-5">
                <div onClick={onClick} className="realtive rounded-full bg-gray-100 sm:h-[76px] sm:w-[76px] h-[70px] w-[70px] flex justify-center items-center cursor-pointer">
                    <div className="h-[42px] w-[4px] bg-gray-600 bg-opacity-50 rounded-3xl"></div>
                    <div className="absolute h-[42px] w-[4px] bg-gray-600 bg-opacity-50 rounded-3xl rotate-90"></div>
                </div>
                <div className="sm:mt-6 mt-3 flex justify-center items-center">
                    <p className="sm:text-[16px] text-[14px] font-figtree text-black text-opacity-40 font-semibold">Add Profile</p>
                </div>
        </div>
       }
       {props.childDone === true && 
        <div className="w-full h-full flex flex-col justify-around sm:px-2 py-2 sm:py-0">
            <div><p className="sm:text-[24px] text-[18px] font-figtree font-semibold">{`${data.name}`}</p></div>
            <div className='flex flex-col sm:flex-row'>
                <div className="flex flex-col">
                    <span className="flex items-center mt-3 lg:mt-0">
                        <span className="flex justify-center items-center rounded-full w-[28px] h-[28px] bg-vector_bg_1 bg-opacity-20">
                            <img className="w-[17px] h-[17px]" src="src/assets/svgviewer-output 1.png"></img>
                        </span>
                        <p className="sm:text-[12px] text-[12px] font-figtree underline ml-3">+91 {`${data.phone.slice(0,4)}`} {`${data.phone.slice(4)}`} </p>
                    </span>
                    <span className="flex items-center sm:mt-5 mt-2">
                        <span className="flex justify-center items-center rounded-full w-[28px] h-[28px] bg-vector_bg_4 bg-opacity-20">
                            <img className="w-[15px] h-[12px]" src="src/assets/envelope.png"></img>
                        </span>
                        <p className="sm:text-[12px] text-[12px] font-figtree underline ml-3">{`${data.email}`}</p>
                    </span>  
                </div>
                <div className="flex flex-col xl:ml-12 md:ml-12 lg:ml-1 mt-3 sm:ml-7 lg:mt-0"> 
                    <span className="flex items-center">
                        <span className="flex justify-center items-center rounded-full w-[28px] h-[28px] bg-vector_bg_3 bg-opacity-20">
                            <img className="w-[17px] h-[17px]" src="src/assets/logo-instagram 1.png"></img>
                        </span>
                        <p className={`sm:text-[12px] text-[12px] font-figtree ${data.igLink != "" ? "underline" : "text-slate-500 text-opacity-30"} ml-3`}>{`${data.igLink != "" ? data.igLink : "Not Enter"}`}</p>
                    </span>
                    <span className="flex items-center sm:mt-5 mt-2">
                        <span className="flex justify-center items-center rounded-full w-[28px] h-[28px] bg-vector_bg_3 bg-opacity-20">
                            <img className="w-[17px] h-[17px]" src="src/assets/logo-twitter 1.png"></img>
                        </span>
                        <p className={`sm:text-[12px] text-[12px] font-figtree ${data.ytLink != "" ? "underline" : "text-slate-500 text-opacity-30"} ml-3`}>{`${data.ytLink != "" ? data.ytLink : "Not Enter"}`}</p>
                    </span>
                </div>
            </div>
        </div>
       }
    </div>
  )
}

export default Card;