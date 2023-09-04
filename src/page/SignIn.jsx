/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";

function SignIn(props) {

    const { loginWithRedirect } = useAuth0();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmil = (e) => {
        const email = e.target;
        setEmail(email.value);
        console.log(email);
        
    };

    const handlPassword = (e) => {
        const pass = e.target;
        setPassword(pass.value);
        console.log(email);
        
    };

    const handleLogin = () => {
        if(email != "" && password != ""){
            props.validData(true);
            console.log(email , password);
        }
        else{
            props.validData(false);
        }
    }

  return (
    <div className="w-screen h-screen flex justify-center bg-primary">
      <div className="relative hidden sm:flex w-full h-full">
        <div className="absolute w-full h-full bg-primary_blue xl:-skew-x-12  xl:left-[-90px]"></div>
        <div className="absolute z-20 w-full h-full flex flex-col justify-between">
            <div className="w-full mt-[40px] ml-[50px]"><p className="text-[24px] font-popp font-bold text-white cursor-pointer">LOGO</p></div>
            <div className="w-full flex justify-center"><p className="text-[60px] font-mont font-bold text-white">Board.</p></div>
            <div className="w-full mb-[40px] flex justify-center">
                <div className="flex lg:gap-8 gap-3 items-center">
                    <img className="md:w-[34px] w-[24px] md:h-[34px] h-[24p] cursor-pointer" src="/assets/github_icon.png"></img>  
                    <img className="md:w-[34px] w-[24px] md:h-[34px] h-[24p] cursor-pointer" src="/assets/twitter_icon.png"></img>  
                    <img className="md:w-[34px] w-[24px] md:h-[34px] h-[24p] cursor-pointer" src="/assets/linkdin_icon.png"></img>  
                    <img className="md:w-[44px] w-[34px] cursor-pointer" src="src/assets/carbon_logo-discord.png"></img>  
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-8 flex flex-col items-start justify-center">
      <div className="flex sm:hidden items-center justify-center w-full">
            <p className="text-[30px] font-mont font-bold text-primary_blue">
              {" "}
              LOGO{" "}
            </p>
        </div>
        <div className="lg:ml-[100px] w-full sm:w-[50vh] sm:h-[70vh] h-[65vh] flex flex-col sm:justify-end">
          <div className="flex flex-col justify-around  sm:h-[60vh] h-full">
            <div className="flex flex-col items-center sm:items-start">
              <span className="sm:text-[36px] text-[26px] font-mont font-bold">Sign In</span>
              <p className="sm:text-[16px] text-[12px] font-lato">
                Sign in to your account
              </p>
            </div>
            <div className="flex w-full sm:justify-between gap-4">
              <span onClick={() => loginWithRedirect()} className="flex items-center justify-center rounded-[10px] bg-white sm:px-4 w-1/2 py-2 text-[12px] cursor-pointer">
                <img className="sm:w-4 sm:h-4 w-6 h-6" src="/assets/google-icon 1.png"></img>
                <p className="ml-3 hidden sm:flex font-mont text-black text-opacity-50 text-center">Sign in with Google</p>
             </span>
             <span className="flex items-center justify-center rounded-[10px] bg-white sm:px-4 w-1/2 py-2 text-[12px] cursor-pointer">
                <img className="sm:w-4 sm:h-4 w-5 h-6" src="/assets/apple 1.png"></img>
                <p className="ml-3 hidden sm:flex font-mont text-black text-opacity-50 text-center">Sign in with Apple</p>
             </span>
            </div>
            <div className="h-[35vh] bg-white rounded-[10px] flex flex-col justify-evenly px-6 mt-2">
              <div className="flex flex-col mt-2">
                <label className="text-[16px] font-lato">Email address</label>
                <input onChange={handleEmil} className="mt-2  bg-gray-300 bg-opacity-30 h-[43px] rounded-md outline-none focus:bg-opacity-100 transition-all ease-in-out duration-300 px-4 text-[16px] font-lato"></input>
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-lato">Password</label>
                <input onChange={handlPassword} type="password" className="mt-2  bg-gray-300 bg-opacity-30 h-[43px] rounded-md outline-none focus:bg-opacity-100 transition-all ease-in-out duration-300 px-4 font-lato font-bold text-[16px]"></input>
              </div>
              <div>
                <p className="text-[14px] font-lato text-primary_blue">Forgot password?</p>
              </div>
                <button onClick={handleLogin} className="border rounded-md text-white bg-primary_blue text-[14px] py-2">Sign in</button>
            </div>
            <div className="flex justify-center">
              <p className="flex text-[14px] text-gray-500 font-lato">
                Don't have an account?<p className="text-primary_blue cursor-pointer">Register here</p>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SignIn;
