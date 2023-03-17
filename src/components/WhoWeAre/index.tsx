import Image from "next/image";
import React from "react";
import BlockButton from "../BlockButton";

const WhoWeAre = () => {
  return (
    <div className="w-full h-fit p-8 md:flex justify-flex items-start gap-6 ">
      <div className="w-[100%] min-h-[100%] h-auto md:w-[50%]">
        <div className="text-[16px] text-green-600 font-semibold">
          {" "}
          WHO WE ARE{" "}
        </div>

        <div className="mt-6 mb-6 font-bold text-black text-[35px]">
          A Professional Development Organisation
        </div>

        <div className="text-gray-600 text-[18px] w-[80%]">
          We are committed to promoting sustainable agriculture and food
          security. We have therefore created investment opportunities in
          farming and agribusiness that contribute to the growth and development
          of local economies.
        </div>

        <BlockButton
          title="Discover More"
          onClick={() => console.log("---> more")}
        />
      </div>

      <div className="w-[100%] h-[400px] md:h-[500px] md:w-[50%] p-[8px] bg-gradient-to-tr from-green-600 to-green-400 rounded-[20px] object-cover ">
        <img
          alt="picture of gardners"
          src="/pedoi-team-min.jpg"
          style={{
            borderRadius: "20px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
