/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import InfoCards from "../components/TopCards";
import ProductCard from "../components/ProductCard";
import Card from "../components/Card";
import Overlay from "../components/Overlay";
import ActivityCard from "../components/ActivityCard";

function Dashboard(props) {
  const [clicked, setClicked] = useState(false);
  const [childDone, setChildDone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    igLink: "",
    ytLink: "",
  });
  const handleClick = (value) => {
    setClicked(value);
    props.handleClick(value);
  };
  
  return (
    <div className="w-full flex flex-row  bg-primary md:ml-none">
      <div className="relative h-full w-full sm:ml-10 flex flex-col py-2 px-7 sm:px-0">
        <Header></Header>
        <div className="w-full h-full grid gap-5 mt-6">
          <div className="lg:xl:h-[15vh] grid row-span-1">
            <InfoCards></InfoCards>
          </div>
          <div className="lg:xl:h-[45vh] grid row-span-1">
            <ActivityCard></ActivityCard>
          </div>
          <div className="lg:xl:h-[35vh] grid row-span-1">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 h-full">
              <ProductCard></ProductCard>
              <Card
                clicked={clicked}
                formData={props.formData}
                childDone={props.childDone}
                handleClick={handleClick}
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
