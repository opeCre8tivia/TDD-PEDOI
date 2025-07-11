"use client"

import React from "react";
import BlockButton from "../BlockButton";
import Link from "next/link";



const CashewSection = () => {
  return (
    <div
      className="w-full min-h-[350px] relative flex justify-center justify-items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/cashew-seed.jpg')" }}
     >
      <div className=" w-full h-[350px] font-bold text-[22px] md:text-[30px] text-white text-center bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center ">
        <div data-testid="cashew_section_title">
          {" "}
          100,000,000 Cocoa and cover trees grown by 2030
        </div>

        <div
          title="cashew_section_text"
          className=" md:w-[30%] text-gray-200 text-[14px] pl-8 pr-8 pt-4 text-center"
        >
          Cocoa is being fronted as a national directive for very strong
          reasons and we are at the forefront
        </div>

        <Link href="/app/register">
         <BlockButton
          title="LEARN MORE"
          onClick={() => console.log("cashew")}
          classNames="min-w-[60px] w-[60px] h-[40px] mt-10"
        />
        </Link>
      </div>
    </div>
  );
};

export default CashewSection;
