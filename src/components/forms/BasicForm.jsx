import React from "react";

function BasicForm({onFormChange}) {
    const handleChange = (e) => {
        const {name, value} = e.target;
        onFormChange(name, value);
    };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-[16px] font-figtree mb-2">Enter Name*</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="h-[48px] border border-gray-300 border-opacity-30 rounded-lg px-3 placeholder-opacity-30 placeholder-slate-500 font-figtree font-thin text-[16px] outline-none"
            placeholder="Eg.John Doe"
          ></input>
        </div>
        <div className="flex flex-col w-full mt-6">
          <label className="text-[16px] font-figtree mb-2">Enter Email*</label>
          <span className="relative w-full flex items-center">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full h-[48px]  border border-gray-300 border-opacity-30 rounded-lg px-3 placeholder-opacity-30 placeholder-slate-500 font-figtree font-thin text-[16px] outline-none"
              placeholder="Eg.John@xyz.com"
            ></input>
            <div className="absolute w-[24px] h-[24px] right-5 flex items-center  rounded-lg hover:bg-gray-200 transition-all ease-in-out duration-500">
              <img
                className="w-full h-full"
                src="src/assets/Right container.png"
              ></img>
            </div>
          </span>
        </div>
        <div className="flex flex-col w-full mt-6">
          <label className="text-[16px] font-figtree mb-2">Enter Phone*</label>
          <span className="relative w-full flex items-center">
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              className="w-full h-[48px]  border border-gray-300 border-opacity-30 rounded-lg px-3 placeholder-opacity-30 placeholder-slate-500 font-figtree font-thin text-[16px] outline-none"
              placeholder="Eg.9123456789"
            ></input>
            <div className="absolute w-[24px] h-[24px] right-5 flex items-center  rounded-lg hover:bg-gray-200 transition-all ease-in-out duration-500">
              <img
                className="w-full h-full"
                src="src/assets/Right container.png"
              ></img>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasicForm;
