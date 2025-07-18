"use client"

import React, { useEffect, useState } from "react";
import {
  AiFillBook,
  AiFillApple,
  AiFillBulb,
  AiFillCalendar,
} from "react-icons/ai";

const CircleList = () => {
  const [list, setList] = useState<any[] | null>(null);

  const _list = [
    {
      title: "Development Benchmarks (SDGs)",
      icon: <AiFillBook color="green" size={30} />,
    },
    {
      title: "Enterprise Development",
      icon: <AiFillApple color="green" size={30} />,
    },
    {
      title: "Financial Inclusin",
      icon: <AiFillBulb color="green" size={30} />,
    },
    {
      title: "Technology Integration",
      icon: <AiFillCalendar color="green" size={30} />,
    },
    {
      title: "Environment Conservation",
      icon: <AiFillCalendar color="green" size={30} />,
    },
  ];

  useEffect(() => {
    const _w = window.innerWidth;
    _w <= 640 ? setList(_list.slice(0, 1)) : setList(_list);
  }, []);

  let RoundDiv = ({ item }: any) => (
    <div className=" h-fit w-auto flex flex-col items-center justify-center relative top-[-60px]">
      <div className="w-[80px] h-[80px]  rounded-full bg-white p-2 m-3 flex justify-center items-center">
        {item.icon}
      </div>
      <div className="m-2 font-bold text-[14px] text-gray-600 text-center uppercase">
        {item.title}
      </div>
    </div>
  );

  return (
    <div className="w-full h-fit bg-gray-200 hidden md:flex justify-center md:justify-around gap-10  flex-wrap relative">
      {list && list.map((item, index) => <RoundDiv item={item} key={index} />)}
    </div>
  );
};

export default CircleList;
