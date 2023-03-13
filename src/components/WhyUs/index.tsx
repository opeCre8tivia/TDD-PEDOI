import React from "react";
import BlockButton from "../BlockButton";

const WhyUs = () => {
  return (
    <div className="w-full h-fit p-8 md:flex justify-flex items-start gap-6 ">
      <div className="w-[100%] min-h-[100%] h-auto md:w-[50%]">
        <div className="text-[16px] text-green-600 font-semibold"> WHY US </div>

        <div className="mt-6 mb-6 font-bold text-black text-[35px]">
          A Dependable Investment Partner
        </div>

        <div className="text-gray-600 text-[16px]">
          Viverra pellentesque lorem congue libero platea facilisi. Nisi pede
          ante ornare gravida dui tortor platea dolor velit. Scelerisque sapien
          tempus a fusce magnis nisi.
        </div>

        <BlockButton
          title="Discover More"
          onClick={() => console.log("---> more")}
          classNames="h-[46px] rounded-[23px] mt-6 mb-6 p-0  w-[100px]"
        />
      </div>

      <div className="w-[100%] h-[400px] md:h-[500px] md:w-[50%] border-green-600 border-[8px] bg-green-600 bg-gradient-to-tr rounded-[20px] "></div>
    </div>
  );
};

export default WhyUs;
