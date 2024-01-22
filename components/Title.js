import React from "react";

const Title = ({ text }) => {
  return (
    <p className="uppercase drop-shadow-[0px_4px_7px_#FFF] sm:drop-shadow-[0px_4px_20px_#FFF] font-bold text-lg sm:text-2xl text-center lg:text-start">
      {text}
    </p>
  );
};

export default Title;
