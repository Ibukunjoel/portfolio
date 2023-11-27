import React from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";


const Stack = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 py-10">
      <p>Tech Stack |</p>{" "}
      <div className="flex gap-4">
        <img src={html} alt="html_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
        <img src={css} alt="css_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
        <img src={javascript} alt="javascript_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
        <img src={react} alt="reactjs_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
        <img src={tailwind} alt="tailwind_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
        <img src={sass} alt="sass_logo" className=" rounded h-11 w-11 lg:h-16 lg:w-16"/>
      </div>
    </div>
  );
};

export default Stack;
