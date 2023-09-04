import React, { useState } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
import { notify, profile, bols_search, search_icon } from "../assets";

function Header() {
  const { logout } = useAuth0();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-3">
      <div className="w-full relative flex justify-between items-center">
      <div>
        <h1 className="text-[18px] sm:text-[24px] font-mont font-extrabold">
          Dashboard
        </h1>
      </div>
      <div className="relative sm:w-[280px] flex flex-row justify-between items-center gap-x-4 sm:gap-x-0">
        <div className="relative hidden sm:flex justify-center items-center">
          <input
            className="sm:w-[198px] h-[32px] bg-white rounded-xl resize-none placeholder-opacity-40 placeholder-black px-3 font-lato  text-[14px] outline-none"
            placeholder="Search..."
          ></input>
          <img
            className="absolute  ml-[120px] h-[12px] w-[12px]"
            src={search_icon}
          ></img>
        </div>
        <div className="sm:hidden">
        <img
            className="h-[20px] w-[20px]"
            src={bols_search}
          ></img>
        </div>
        <div className="relative">
          <img
            className="h-[20px] w-[18px]"
            src={notify}
          ></img>
        </div>
        <div
          onClick={() => setClicked(!clicked)}
          className="relative group flex items-center justify-center"
        >
          <img
            className="h-[30px] w-[30px]"
            src={profile}
          ></img>
          <span
            className={`absolute flex justify-center items-center ${
              clicked ? "flex" : "hidden"
            } top-[40px] shadow-lg border w-16 h-12 px-2 py-1 bg-white rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-white`}
          >
            <button
              onClick={() => logout()}
              className="text-white font-lato font-bold text-[10px] px-2  rounded-md bg-primary_blue h-3/5"
            >
              Logout
            </button>
          </span>
          <div></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
