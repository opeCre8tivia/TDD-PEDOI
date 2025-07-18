"use client"

import React from "react";
import BlockButton from "../BlockButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-fit md:min-h-[100vh] relative bg-[url('/assets/cocoa_hero_image.jpeg')] bg-no-repeat bg-cover ">
      <div className="w-full h-fit md:h-[100vh] bg-[rgba(0,0,0,0.3)]  flex flex-col justify-center items-center pt-10 pb-20 ">
        <div className=" w-[90%] md:w-[60%] mb-8 text-[25px] md:text-[40px] font-extrabold  text-white text-center">
           Empowering Cocoa farmers for a sustainable today to tomorrow
        </div>
        <div className="w-[90%] md:w-[60%] mb-8 text-[16px] md:text-[20px] font-semibold text-white text-center">
          Join us in revolutionizing the cocoa industry with our innovative platform, connecting farmers, buyers, and consumers for a sustainable future.
        </div>
        {/* two btn container */}
        <div className="w-full h-auto flex  flex-wrap justify-center gap-4 items-center ">
          <Link href={"/app/register"}>
            <BlockButton
            onClick={() => {}}
            title="REGISTER NOW"
          />
          </Link>
          {/* <BlockButton
            onClick={() => console.log("cliq")}
            title="LEARN MORE"
            classNames="bg-white text-green-600 hover:bg-gray-300"
            styles={{ color: "green" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
