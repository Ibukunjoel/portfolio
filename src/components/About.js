import React from "react";
import table from "../assets/images/table.jpg"

const About = () => {
  return (
    <div id="about" className="flex justify-center items-center flex-col-reverse lg:flex-row h-max w-screen gap-10 lg:gap-20 py-28">
      <img src={table} alt="work_table" className=" rounded-lg h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"/>
      <div className="flex flex-col text-center lg:text-left w-96 lg:w-[550px] lg:h-[400px] lg:gap-4">
        <h5 className="text-blue-600 text-xl lg:text-2xl font-bold mb-3">ABOUT ME</h5>
        <h3 className="text-gray-700 text-2xl lg:text-4xl lg:text-left font-semibold mb-3">A dedicated Front-end Developer based in Lagos Nigeria</h3>
        <p className="text-gray-700 text-lg lg:text-xl leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          aquibusdam
        </p>
      </div>
    </div>
  );
};

export default About;
