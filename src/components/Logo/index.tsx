import Image from "next/image";
import React from "react";

/**
 *
 * Responsive and re-usable Logo Components
 */

interface Logo {
  styles?: object;
}

const Logo = ({ styles }: Logo) => {
  return (
    <div className=" w-[50px] h-[50px] md:w-[90px] md:h-[90px] flex justify-center items-center mr-5 ml-5">
      <Image
        src="/pedoi_logo.png"
        width={100}
        height={100}
        style={styles}
        alt="pedoi logo"
      />
    </div>
  );
};

export default Logo;
