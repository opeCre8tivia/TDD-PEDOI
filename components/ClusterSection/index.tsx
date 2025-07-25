import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiRoastChicken, GiGrain, GiPlantRoots } from "react-icons/gi";

const ClusterSection = () => {
  const _cluster = [
     {
      icon: <GiGrain size={30} color="#fff" />,
      title: "Cocoa Cluster",
      text: "The total value of cocoa production in the East African Community region is estimated at over $314.19 million annually and over $68.7 million in Uganda alone.Find out how you can Invest in cocoa ",
      uri: "/app/register",
    },
    {
      icon: <GiPlantRoots size={30} color="#fff" />,
      title: "Cassava Cluster",
      text: "Cassava is an economically viable crop that has the potential to provide both food and income.For example,Cassava starch was valued at $4.4 billion in 2020 in the global market.Learn how you can invest in cassava",
      uri: "/app/register",
    },
    {
      icon: <GiRoastChicken size={30} color="#fff" />,
      title: "Poultry Cluster",
      text: "The African poultry industry is estimated to be worth over $15 billion and is projected to grow to $28.8 billion by 2025.We have a well tailored investment perk that offers high return possibilities. Find out more now ",
      uri: "/app/register",
    },
  ];

  const ClusterDiv = ({
    item,
  }: {
    item: { icon: JSX.Element; title: string; text: string,uri: string };
  }) => (
    <div className="w-[80%] md:w-[30%] h-[350px] shadow-md rounded-md flex flex-col justify-start items-center pt-6 pr-6 pl-6 mb-10 bg-white relative">
      <div className="w-[60px] h-[60px] rounded-full bg-green-600 p-2 flex justify-center items-center">
        {item.icon}
      </div>

      <div className="text-clip text-[18px] text-gray-600 font-bold ">
        {item.title}
      </div>

      <div className="text-md text-gray-600 mt-4">{item.text}</div>

      <Link href={item.uri} className="w-auto h-auto">
        <div className="w-[60px] h-[60px] rounded-full  bg-white shadow-md drop-shadow-md p-2 flex justify-center items-center absolute bottom-[-30px]">
        <AiOutlineArrowRight size={30} color="gray" />
      </div>
      </Link>
    </div>
  );
  return (
    <section className="w-full">
      <div className="w-full h-fit flex justify-around items-center flex-wrap p-6 gap-4 ">
        {_cluster &&
          _cluster.map((item, index) => <ClusterDiv item={item} key={index} />)}
      </div>
    </section>
  );
};

export default ClusterSection;
