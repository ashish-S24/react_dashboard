/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import BasicForm from "./forms/BasicForm";
import ContactFrom from "./forms/ContactFrom";
import { close, down_arr } from "../assets";
function Overlay(props) {
  const [clicked, setClicked] = useState(props.clicked);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    igLink: "",
    ytLink: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFormChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
   
    props.onSubmit(formData);

    setClicked(false);

    if (props.clicked) {
      props.handleClick(false);
    }
    if(!props.childDone){
        props.handleChildDone(true);
    }
  };

  useEffect(() => {
    setClicked(props.clicked);
  }, [props.clicked]);

  const handleClose = () => {
    setStep(1);
    setClicked(false);

    if (props.clicked) {
      props.handleClick(false);
    }
  };

  return clicked ? (
    <div className="fixed z-20 top-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
      <div className="sm:w-[544px] w-[40vh] rounded-xl bg-white">
        <div className="p-4 px-7 border-b border-gray-300 border-opacity-25 flex items-center justify-between">
          <p className="sm:text-[20px] text-[18px] font-figtree font-semibold">
            Add New Profile
          </p>
          <img
            onClick={handleClose}
            className="w-3 h-3 cursor-pointer"
            src={down_arr}
          ></img>
        </div>
        <div className="p-4 px-7 mt-2">
          <div className="flex justify-between h-[40px]">
            <div className={`sm:w-[213px] w-full ${step != 1 ? "hidden":"flex"} sm:flex flex-col items-center justify-center`}>
              <p className="text-[18px] sm:text-[16px] font-figtree font-semibold">Basic</p>
              <span className={`mt-2 sm:w-full w-[20vh] h-1   ${step === 1 ? "bg-primary_blue":"bg-gray-300"} rounded-xl`}></span>
            </div>
            <div className={`sm:w-[213px] w-full ${step != 2 ? "hidden":"flex"} sm:flex flex-col items-center justify-center`}>
              <p className="sm:text-[16px] text-[18px] font-figtree font-semibold">Social</p>
              <span className={`mt-2 sm:w-full w-[20vh] h-1  ${step === 2 ? "bg-primary_blue":"bg-gray-300"} rounded-xl`}></span>
            </div>
          </div>
          <div className="mt-6">
            {step === 1 && <BasicForm onFormChange={handleFormChange}></BasicForm>}
            {step === 2 && <ContactFrom onFormChange={handleFormChange}></ContactFrom>}
          </div>
        </div>
        <div className="p-4 border-t border-gray-300 border-opacity-25 flex justify-end mt-6">
          {step === 2 && (
            <div>
              <button onClick={handleBack} className="w-[64px] h-[40px] mr-4 rounded-lg border text-black font-figtree text-[14px]">
                Back
              </button>
              <button onClick={handleSubmit} className="w-[64px] h-[40px] rounded-lg bg-primary_blue text-white font-figtree text-[14px]">
                Done
              </button>
            </div>
          )}
          {step === 1 && (
            <button onClick={handleNext} className="w-[64px] h-[40px] rounded-lg bg-primary_blue text-white font-figtree text-[14px]">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default Overlay;
