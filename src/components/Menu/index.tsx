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
      id: 3,
      title: "Projects",
      href: "#",
    },
    {
      id: 4,
      title: "About us",
      href: "#",
    },
    {
      id: 5,
      title: "Contact",
      href: "#",
    },
  ];
  return (
    <div className=" hidden md:flex w-auto items-center gap-5 mr-5 ml-5 ">
      {_menu &&
        _menu.map((item: MenuItem, index: number) => {
          return (
            <div
              key={item.id}
              className=" text-[16px]  font-semibold text-gray-600 text-center transform duration-500 hover:text-green-300"
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
