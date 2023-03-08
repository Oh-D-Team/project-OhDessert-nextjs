import React, { useState } from "react";
import Link from "next/link";
// import { withRouter } from "react-router-dom";

import tw from "tailwind-styled-components";

import Logo from "../public/logo.svg";

const NavBarList = tw.li`
relative hover:text-[#F53354] hover:after:content-[''] hover:after:w-[6px] hover:after:h-[6px] hover:after:bg-[#F53354] hover:after:block hover:after:rounded-full hover:after:absolute hover:after:top-0 hover:after:-right-2 hover:transition
`;

// export default withRouter((props) => (
const Navbar = () => {
  // const [barOpen, setBarOpen] = useState(false);
  // const onBarClick = () => {
  //   setBarOpen(!barOpen);
  // };

  return (
    <header className="sticky top-0 left-0 z-[2] w-full bg-white shadow-md h-[120px] sm:h-[80px] flex items-center px-5">
      <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/">
          <h1 className="ml-0">
            <Logo className="h-10 sm:h-11" />
          </h1>
        </Link>

        {/* pc header start */}
        <nav className="md:mr-[40px] text-base md:text-lg justify-center font-[600]">
          <ul className="flex flex-wrap items-center gap-[27px] min-[400px]:gap-10 min-[500px]:gap-14 sm:gap-10 md:gap-[60px] xl:gap-[80px] text-lg">
            <NavBarList>Home</NavBarList>
            <Link href="/map">
              <NavBarList>Find</NavBarList>
            </Link>
            <Link href="/curation">
              <NavBarList>Curation</NavBarList>
            </Link>
            <NavBarList>Contact</NavBarList>
          </ul>
        </nav>

        {/* mobile header start */}
        {/* <button className="relative md:hidden mr-5 w-7 h-[21px] z-[1]" onClick={onBarClick}>
          <span className={ "text-[0px] w-7 h-[2px] bg-black transition block absolute top-0 left-0 " + (barOpen ? "rotate-45 mt-[10px] bg-white" : "translate-y-0" ) }>메뉴</span>
          <span className={ "text-[0px] w-7 h-[2px] bg-black transition block absolute top-[10px] left-0 "  + (barOpen ? "hidden" : "block" ) }>메뉴</span>
          <span className={ "text-[0px] w-7 h-[2px] bg-black transition block absolute top-[20px] left-0 " + (barOpen ? "-rotate-45 -mt-[10px] bg-white" : "translate-y-0" ) }>메뉴</span>
        </button>
        <nav className={ "pt-[20vh] px-5 absolute top-0 left-0 w-full h-screen bg-[#F53354] flex flex-col gap-10 transition md:hidden " + (barOpen ? "block" : "hidden" ) }>
          <h2 className="text-white text-4xl font-[600]">Home</h2>
          <Link href="/map">
            <h2 className="text-white text-4xl font-[600]">Find</h2>
          </Link>
          <h2 className="text-white text-4xl font-[600]">Curation</h2>
          <h2 className="text-white text-4xl font-[600]">Contact</h2>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
