"use client"

import React from "react";

interface Button {
  /**
   * A call back function that runs every time the button is clicked
   */
  onClick: () => void;

  /**
   * A styles object that is passed to customise the look of the button
   */
  styles?: object;

  /**
   * Button title
   */
  title: string;

  /**
   * a string of tailwind utility classes
   */
  classNames?: string;
}

const BlockButton = ({ title, styles, onClick, classNames }: Button) => {
  return (
    <div
      onClick={onClick}
      className={`h-[50px] rounded-full p-4 w-fit mt-4 mb-4  pl-10 pr-10 bg-green-600 hover:bg-gradient-to-tr hover:from-green-600 hover:to-green-400 text-[16px] capitalize text-white text-center font-semibold flex justify-center items-center ${classNames}`}
      style={styles}
      data-testid="block_button"
    >
      {" "}
      {title}
    </div>
  );
};

export default BlockButton;
