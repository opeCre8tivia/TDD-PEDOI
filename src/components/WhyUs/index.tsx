import React, { useEffect, useState } from "react";
import BlockButton from "../BlockButton";

const WhyUs = () => {
  /**
   * detect if its small screen or lg screens
   *
   */

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    let _h = window.innerHeight;
    let _w = window.innerWidth;
    setWindowWidth(_w);
  }, []);
  return (
    <div className="w-full h-fit p-8 md:flex justify-flex items-start gap-6 ">
      <div className="w-[100%] min-h-[100%] h-auto md:w-[50%]">
        <div className="text-[16px] text-green-600 font-semibold"> WHY US </div>

        <div className="mt-6 mb-6 font-bold text-black text-[35px]">
          A Dependable Investment Partner
        </div>

        <div className="text-gray-600 text-[16px]">
          We pride ourselves on being a dependable investment partner. We
          understand that investing can be a daunting task, which is why we
          strive to provide our clients with a transparent and trustworthy
          investment experience. Our track record speaks for itself. We have a
          proven history of delivering strong returns to our investors while
          maintaining a commitment to responsible investing.
        </div>

        <BlockButton
          title="Discover More"
          onClick={() => console.log("---> more")}
          classNames="h-[46px] rounded-[23px] mt-6 mb-6 p-0  w-[100px]"
        />
      </div>

      <div className="w-[100%] h-[400px] md:h-[500px] md:w-[50%] p-[8px]   bg-gradient-to-tr from-green-600 to-green-400 rounded-[20px] ">
        <img
          alt="pedoi staff and brain child interns"
          src={`${
            windowWidth < 640
              ? "/pedoi-brainchild-sm.png"
              : "/pedoi-brainchild-lg.png"
          }`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "18px",
          }}
        />
      </div>
    </div>
  );
};

export default WhyUs;
