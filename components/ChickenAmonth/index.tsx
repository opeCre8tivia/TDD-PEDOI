"use client"

import React from "react";
import BlockButton from "../BlockButton";
// import chickenpic from "../../assets/pedoi-chicken.jpg"

const ChickenAmonth = () => {
  return (
    <div className={`w-full min-h-[350px] relative flex justify-center justify-items-center bg-[url('../../assets/pedoi-chicken.jpg')] bg-no-repeat bg-cover bg-center`}>
      <div className=" w-full h-[350px] font-bold text-[22px] md:text-[30px] text-white text-center bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center ">
        <div data-testid="cashew_section_title">
          {" "}
          Our 100,000 Champions saving a chicken a month
        </div>

        <div
          title="cashew_section_text"
          className=" md:w-[50%] text-gray-200 text-[14px] pl-8 pr-8 pt-4 text-center"
        >
          Our ambition is to have more than 60% of households each have at least
          20 Chicken being reared that would aggregate to 10 million chicken,
          with a vibrant formal commercial economy.
        </div>

        <BlockButton
          title="LEARN MORE"
          onClick={() => console.log("cashew")}
          classNames="min-w-[60px] w-[60px] h-[40px] mt-10"
        />
      </div>
    </div>
  );
};

export default ChickenAmonth;
