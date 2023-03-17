import React from "react";
import BlockButton from "../BlockButton";

const Aic = () => {
  return (
    <section className="w-full h-fit p-8 md:flex justify-flex items-start gap-6 ">
      {/*  */}

      <div className="w-[100%] h-[400px] md:h-[500px] md:w-[50%] p-[8px] bg-gradient-to-tr from-green-600 to-green-400 rounded-[20px] ">
        <img
          src="/pedoi-center.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "18px",
          }}
        />
      </div>

      {/*  */}
      <div className="w-[100%] min-h-[100%] h-auto md:w-[50%]">
        <div className="text-[16px] text-green-600 font-semibold mt-6">
          {" "}
          OUR AIC MODEL{" "}
        </div>

        <div className="mt-6 mb-6 font-bold text-black text-[35px]">
          Agricultral Intergration Center
        </div>

        <div className="text-gray-600 text-[16px]">
          We seek to industrialize Agriculture and the rural economy with our
          AIC model it is our unique innovation that sets up a pipeline to
          sustained production from agro processing to setting up industrial
          scale factories that feed streamlined markets. This is aglaring
          opportunity for investment and we hope you can join us
        </div>

        <BlockButton
          title="Discover More"
          onClick={() => console.log("---> more")}
          classNames="h-[46px] rounded-[23px] mt-6 mb-6 p-0  w-[100px]"
        />
      </div>
    </section>
  );
};

export default Aic;
