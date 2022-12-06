import React from "react";

export const ContentWrapper = ({ children, heading, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className=" text-2xl font-bold">{heading}</span>
      <span className=" text-xs mb-5 opacity-50">{description}</span>
      {children}
    </div>
  );
};
