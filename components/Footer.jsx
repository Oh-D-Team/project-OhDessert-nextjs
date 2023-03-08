import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#ededed]">
      <div className="px-5 py-8 flex items-center sm:flex-row flex-col h-auto">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-[28px] font-bold text-[#bbb] sm:text-[32px]]">SWEETRIP</span>
        </a>
        <p className="text-sm text-[#999] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#ddd] sm:py-2 sm:mt-0 mt-4 sm:text-base">
          Copyright © 2023 SWEETRIP All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
