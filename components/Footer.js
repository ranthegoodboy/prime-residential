import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#E9F0F9]">
      <div className="boxed-container ">
        <div className="text-center py-12">
          <span className="text-lg text-gray-500 font-bold">
            Copyright © {year} Prime Metal Products – All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
