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
    <div className=" w-[80px] h-[80px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-2 ml-2">
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
