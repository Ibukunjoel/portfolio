import React from "react";
// import ibukun from "../assets/images/ibukun.jpg";
import github from "../assets/icons/github.png";
import linkedln from "../assets/icons/linkedin.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import hi from "../assets/images/Hi.png";

const Hero = () => {
  return (
    <div id="home" className="flex justify-center items-center flex-col h-[100%] lg:h-screen bg-[#f5f5f5] lg:gap-10 py-10 lg:py-0">
      <div className="container mx-auto flex justify-center items-center flex-col-reverse lg:flex-row gap-4 lg:gap-20">
        <div className="flex lg:items-start items-center gap-2 lg:text-left flex-col w-[400px] lg:w-[500px] text-center text-gray-800">
          <h1 className=" text-4xl lg:text-6xl text-gray-800 font-bold inline-flex">
            Front-End React
            <br />
            Developer
            <span>
              <img
                src={hi}
                alt="hi"
                className="wave lg:block hidden  h-[100%] w-[100%]"
              />
            </span>
            <span>
              <img src={hi} alt="hi" className="lg:hidden h-20 w-20" />
            </span>
          </h1>
          <p className=" text-lg lg:text-xl font-normal">
            Hi, <b className="text-blue-600">I'm Ibukun Agotola.</b> An enthusiat self-taught Front-end
            React Developer based in Lagos, Nigeria.
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/ibukun-agotola/"
              target="_blanck"
              className=" p-2 rounded hover:bg-slate-300"
            >
              <img src={linkedln} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Ibukunjoel"
              target="_blanck"
              className=" p-2 rounded hover:bg-slate-300"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="image_frame">
          {/* <img src={ibukun} alt="ibukun" className="ibukun" /> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 py-10">
        <p className="text-lg font-bold text-gray-800">Tech Stack |</p>{" "}
        <div className="flex gap-4">
          <img
            src={html}
            alt="html_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={css}
            alt="css_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={javascript}
            alt="javascript_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={react}
            alt="reactjs_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={tailwind}
            alt="tailwind_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={sass}
            alt="sass_logo"
            className=" rounded h-11 w-11 lg:h-16 lg:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
