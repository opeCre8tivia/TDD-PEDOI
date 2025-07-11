"use client"

import React from "react";
import BlockButton from "../BlockButton";
import Link from "next/link";
// import chickenpic from "../../assets/pedoi-chicken.jpg"

const ChickenAmonth = () => {
  return (
    <div className={`w-full min-h-[350px] relative flex justify-center justify-items-center bg-[url('/assets/pedoi-chicken.jpg')] bg-no-repeat bg-cover bg-center`}>
      <div className=" w-full h-[350px] font-bold text-[22px] md:text-[30px] text-white text-center bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center ">
        <div data-testid="cashew_section_title">
          {" "}
          Our 100,000 Champions into Agriculture Agribusiness and Food Systems
        </div>

        <div
          title="cashew_section_text"
          className=" md:w-[50%] text-gray-200 text-[14px] pl-8 pr-8 pt-4 text-center"
        >
          Become one of our Agriculture Agribusiness and Food Systems champion for 21 Century solution.
          Why not you? Why not join today

        </div>

        <Link href="/app/register">
        <BlockButton
          title="JOIN NOW"
          onClick={() => {}}
          classNames="min-w-[60px] w-[60px] h-[40px] mt-10"
        />
        </Link>
      </div>
    </div>
  );
};

export default ChickenAmonth;
