import React from "react";
import Logo from "../Logo";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "../Menu";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div
      data-testid="nav_bar"
      className="w-full h-[60px] min-h-[60px] md:h-[70px] md:min-h-[70px] bg-white flex justify-between items-center px-4"
    >
       <Logo styles={{width:"40px",height:"40px"}} /> 
       <Menu />
     
    </div>
  );
};

export default NavBar;
