import React, { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-start shadow-md sticky top-0 bg-white z-50">
      <a href="/#home" className="text-xl font-bold text-blue-700 py-3 px-10 hover:bg-[#f5f5f5]">
        Ibukun.dev
      </a>
      
      {/* Desktop menu  */}
      <div className="lg:flex hidden bg-blue-600">
        <a
          href="/#home"
          className="text-lg text-white font-medium hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 py-3 px-10"
        >
          Home
        </a>
        <a
          href="/#about"
          className="text-lg text-white font-medium hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 py-3 px-10"
        >
          About
        </a>
        <a
          href="/#projects"
          className="text-lg text-white font-medium hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 py-3 px-10"
        >
          Project
        </a>
        <a
          href="/#contact"
          className="text-lg text-white font-medium hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 py-3 px-10"
        >
          Contact
        </a>
      </div>

      {/* Mobile menu */}
      <div className="menu_case flex lg:hidden flex-col text-center relative">
        <p
          className="text-lg font-extrabold py-3 pr-5 z-50 cursor-pointer"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          {toggleMenu ? "X" : "M"}
        </p>

        {toggleMenu && (
          <div
            className="menu flex flex-col justify-center items-center py-32 text-center shadow-lg absolute right-0 w-screen h-screen bg-blue-600 font-semibold text-white z-30"
          >
            <a
              href="/"
              className="flex justify-center items-center text-xl hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 w-full h-14"
              onClick={() => setToggleMenu(false)}
            >
              Home
            </a>
            <a
              href="/#about"
              className="flex justify-center items-center text-xl hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 w-full h-14"
              onClick={() => setToggleMenu(false)}
            >
              About
            </a>
            <a
              href="/#projects"
              className="flex justify-center items-center text-xl hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 w-full h-14"
              onClick={() => setToggleMenu(false)}
            >
              Project
            </a>
            <a
              href="/#contact"
              className="flex justify-center items-center text-xl hover:bg-blue-700 active:[#ff4500] focus:outline-none focus:ring focus:ring-blue-900 w-full h-14"
              onClick={() => setToggleMenu(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
