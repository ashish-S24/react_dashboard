import React, { useEffect, useState } from 'react';
import { sand_clock } from '../assets';

function LoadingIndicator() {
    const[progress, setProgress] = useState(0);
    const[percent, setPercent] = useState(0);

    useEffect(() => {
        setInterval(()=>{
            setProgress((val) => val + 1)
        }, 80);
    },[])

    useEffect(() =>{
        setPercent(Math.min(100, Math.max(progress, 0)));
    }, [progress])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center border">
        <div><img className="w-[50px] h-[50px]" src={sand_clock}></img></div>
        <div className="w-[30vh] h-2 mt-4 flex justify-center items-center overflow-hidden borde-black rounded-xl">
        <div 
        style={{
            width:`${percent}%`,
            transform: `scaleX(2)`,
            transformOrigin: 'left right',
        }} 
        className="h-full bg-primary_blue transition-all ease-linear duration-20"></div>
        </div>
    </div>
  )
}

export default LoadingIndicator;