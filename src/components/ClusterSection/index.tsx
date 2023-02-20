import React from "react";
import {
  AiFillAccountBook,
  AiOutlineArrowRight,
  AiOutlineArrowsAlt,
} from "react-icons/ai";

const ClusterSection = () => {
  const _cluster = [
    {
      icon: <AiFillAccountBook size={30} color="#fff" />,
      title: "Cassava Cluster",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      uri: "",
    },
    {
      icon: <AiFillAccountBook size={30} color="#fff" />,
      title: "Paultry Cluster",
      text: "",
      uri: "",
    },
    {
      icon: <AiFillAccountBook size={30} color="#fff" />,
      title: "Rice Cluster",
      text: "",
      uri: "",
    },
  ];

  const ClusterDiv = ({
    item,
  }: {
    item: { icon: JSX.Element; title: string; text: string };
  }) => (
    <div className="w-[80%] md:w-[30%] h-[350px] shadow-md rounded-md flex flex-col justify-start items-center pt-6 pr-6 pl-6 mb-10 bg-white relative">
      <div className="w-[60px] h-[60px] rounded-full bg-green-600 p-2 flex justify-center items-center">
        {item.icon}
      </div>

      <div className="text-clip text-[16px] text-green-600 font-bold ">
        {item.title}
      </div>

      <div className="text-md text-gray-400 mt-4">{item.text}</div>

      <div className="w-[60px] h-[60px] rounded-full  bg-white shadow-md drop-shadow-md p-2 flex justify-center items-center absolute bottom-[-30px]">
        <AiOutlineArrowRight size={30} color="gray" />
      </div>
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
