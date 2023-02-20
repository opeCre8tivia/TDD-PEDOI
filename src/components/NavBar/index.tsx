import React from "react";
import Logo from "../Logo";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "../Menu";

const NavBar = () => {
  return (
    <div
      data-testid="nav_bar"
      className="w-full h-[60px] min-h-[60px] md:h-[100px] md:min-h-[100px] bg-white flex justify-between items-center"
    >
      <Logo />
      {/* mobile menu Icon */}
      <AiOutlineMenu className=" md:hidden text-[30px] mr-5" />
      {/* menu */}
      <Menu />
    </div>
  );
};

export default NavBar;
