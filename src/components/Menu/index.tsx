import React from "react";

interface MenuItem {
  id: number;
  title: string;
  href: string;
}

const Menu = () => {
  const _menu: Array<MenuItem> = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "What we do",
      href: "#",
    },
    {
      id: 2,
      title: "Projects",
      href: "#",
    },
    {
      id: 1,
      title: "About us",
      href: "#",
    },
    {
      id: 1,
      title: "Contact",
      href: "#",
    },
  ];
  return (
    <div className=" hidden md:flex w-auto items-center gap-5 mr-5 ml-5 ">
      {_menu &&
        _menu.map((item: MenuItem) => {
          return (
            <div className=" text-[16px]  font-semibold text-gray-600 text-center hover:text-green-300">
              {item.title}
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
