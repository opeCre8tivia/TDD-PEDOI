import React from "react";
import BlockButton from "../BlockButton";

const Hero = () => {
  return (
    <div className="w-full h-fit md:min-h-[80vh] relative bg-[url('/farm-two.jpg')] bg-no-repeat bg-cover ">
      <div className="w-full h-fit md:h-[80vh] bg-[rgba(0,0,0,0.3)]  flex flex-col justify-center items-center pt-10 pb-20 ">
        <div className=" w-[80%] md:w-[40%] mb-8 text-[25px] md:text-[40px] font-extrabold  text-white text-center">
          Developing Professionals for the Industry
        </div>
        {/* two btn container */}
        <div className="w-full h-auto flex  flex-wrap justify-center gap-4 items-center ">
          <BlockButton
            onClick={() => console.log("cliq")}
            title="GET STARTED"
          />
          <BlockButton
            onClick={() => console.log("cliq")}
            title="LEARN MORE"
            classNames="bg-gray-100 text-green-400 hover:bg-green-400 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
