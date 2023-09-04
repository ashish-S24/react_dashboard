/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";

function ActivityCard() {
  const [chartData, setChartData] = useState([]);
  const [limitedChartData, setLimitedChartData] = useState([]);
  const [scalingFactorTemp, setScalingFactorTemp] = useState(0);
  const [scalingFactorHumi, setScalingFactorHumi] = useState(0);
  const [maxDataValueTemp, setMaxDataValueTemp] = useState(null);
  const [maxDataValueHumi, setMaxDataValueHumi] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?lat=20.5937&lon=78.9629&appid=4626c9e9e121bd0737120601a8dc7e06"
      )
      .then((response) => {
        const chartData = response.data.list.map((item) => ({
          tempt: item.main.temp,
          humi: item.main.humidity,
        }));
        setChartData(chartData);

        calculateChartData(chartData);
      })
      .catch((error) => {
        console.log("Error fetching Data:", error);
      });
  }, []);

  useEffect(() => {

      const handleResize = () => {
        if (limitedChartData.length > 0) {
            const maxValueTemp = Math.max(...limitedChartData.map((item) => item.tempt));
            const maxValueHumi = Math.max(...limitedChartData.map((item) => item.humi));
            const factorTemp = isMobileView ? 130 / maxValueTemp : 180 / maxValueTemp;
            const factorHumi = isMobileView ? 130 / maxValueHumi : 180 / maxValueHumi;
            setScalingFactorTemp(factorTemp);
            setScalingFactorHumi(factorHumi);
        }
        setIsMobileView(window.innerWidth <= 700);
      };
    
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize" , handleResize);
      }
  }, []);


  const calculateChartData = (data) => {
    const shuffledData = data.sort(() => Math.random() - 0.5);
    const limitedData = shuffledData.slice(0, 4);

    if (limitedData.length > 0) {
      const maxValueTemp = Math.max(...limitedData.map((item) => item.tempt));

      const maxValueHumi = Math.max(...limitedData.map((item) => item.humi));

      setLimitedChartData(limitedData);

      setMaxDataValueTemp(maxValueTemp);

      setMaxDataValueHumi(maxValueHumi);

      console.log(maxValueHumi, maxDataValueTemp);

      const factorTemp = isMobileView ? 130 / maxValueTemp : 180 / maxValueTemp;
      const factorHumi = isMobileView ? 130 / maxValueHumi : 180 / maxValueHumi;

      setScalingFactorTemp(factorTemp);
      setScalingFactorHumi(factorHumi);
    }
  };

  return (
    <div className="w-full h-full bg-white flex grid-rows-1  flex-col md:px-8 px-3 py-4  rounded-3xl shadow-lg border-[2px] border-gray-200">
      <div className="flex justify-between items-center h-12">
        <div>
          <h1 className="sm:text-[18px] text-[14px] font-mont font-bold">
            Activities
          </h1>
          <p className="sm:text-[14px] text-[10px] text-black text-opacity-40 font-mont">
            May - June 2023
          </p>
        </div>
        <div className="flex">
          <span className="flex items-center sm:mr-6 mr-3">
            <div className="w-2 h-2 rounded-full bg-vector_bg_3"></div>
            <p className="ml-3 sm:text-[14px] text-[12px] font-lato">Guest</p>
          </span>
          <span className="flex items-center sm:mr-12 mr-3">
            <div className="w-2 h-2 rounded-full bg-vector_bg_1"></div>
            <p className="ml-3 sm:text-[14px] text-[12px] font-lato">User</p>
          </span>
        </div>
      </div>
      <div className="flex w-full h-full mb-4">
        <div className="flex flex-col text-right h-full justify-around  text-black text-opacity-50 font-mont">
          <p className="mt-3 text-[10px] sm:text-[14px]">500</p>
          <p className="mt-3 text-[10px] sm:text-[14px]">400</p>
          <p className="mt-3 text-[10px] sm:text-[14px]">300</p>
          <p className="mt-3 text-[10px] sm:text-[14px]">200</p>
          <p className="mt-3 text-[10px] sm:text-[14px]">100</p>
          <p className="mt-3 text-[10px] sm:text-[14px]">0</p>
        </div>
        <div className="relative flex flex-col xl:w-[94%] lg:w-[92%] md:w-[90%] w-[88%] h-full justify-around">
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <span className="h-[1px] w-full bg-gray-500 opacity-10 ml-3 mt-3"></span>
          <div className="absolute grid grid-cols-4 lg:grid-cols-4 gap-0 sm:gap-3 md:gap-4 lg:gap-10  w-full h-full ml-5">
            {limitedChartData.map((item, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col justify-center items-end sm:w-full h-full mt-[0px] sm:mt-[4px] max-[612px]:mt-[3px] md:mt-0 lg:mt-[6px]  sm:px-4"
              >
                <div className="flex justify-center items-end w-full h-full">
                  <div
                    style={{ height: `${item.humi * scalingFactorHumi}px` }}
                    className="sm:w-10 w-3 sm:rounded-md rounded-md bg-vector_bg_1 sm:mr-1 transition-all ease-linear duration-150"
                  ></div>
                  <div
                    style={{ height: `${item.tempt * scalingFactorTemp}px` }}
                    className="sm:w-10 w-3 sm:rounded-md rounded-md bg-chartbar_primary ml-1 transition-all ease-linear duration-150"
                  ></div>
                </div>
                <div className="text-[10px] sm:md:text-[12px] lg:text-[14px] flex w-full justify-center text-black text-opacity-50 font-mont">
                  <p>Week {`${index + 1}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
