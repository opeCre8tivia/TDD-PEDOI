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
      className={` w-[70%] min-w-[70%] h-[50px] rounded-full p-4  md:w-[25%] md:min-w-[25%] bg-green-600 hover:bg-green-300 text-[16px] capitalize text-white text-center font-semibold flex justify-center items-center ${classNames}`}
      style={styles}
      data-testid="block_button"
    >
      {" "}
      {title}
    </div>
  );
};

export default BlockButton;
