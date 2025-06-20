import Image from "next/image";
import React from "react";
import logo from "../../assets/pedoi_logo.png"

/**
 *
 * Responsive and re-usable Logo Components
 */

interface Logo {
  styles?: object;
}

const Logo = ({ styles }: Logo) => {
  return (
    <div className=" w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex justify-center items-center mr-5 ml-5">
      <Image
        src={logo.src}
        width={100}
        height={100}
        style={styles}
        alt="pedoi logo"
      />
    </div>
  );
};

export default Logo;
