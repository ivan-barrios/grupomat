import React from "react";

const Subtitle = ({ text }) => {
  return (
    <h2 className="font-bold text-2xl md:text-3xl text-center lg:text-start">
      {text}
    </h2>
  );
};

export default Subtitle;
