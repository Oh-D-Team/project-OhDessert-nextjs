import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-[2] w-full bg-white shadow-sm h-[70px] flex items-center">
      <div className="w-[96%] mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <h1 className="text-xl font-bold">사이트 이름</h1>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center font-bold">
          <h2 className="mr-5 hover:text-gray-900">Home</h2>
          <h2 className="mr-5 hover:text-gray-900">Find</h2>
          <h2 className="mr-5 hover:text-gray-900">Curation</h2>
          <h2 className="mr-5 hover:text-gray-900">Contact</h2>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
