import React from "react";
import table from "../assets/images/table.jpg"

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse lg:flex-row h-screen w-screen gap-10 py-20">
      <img src={table} alt="work_table" className=" rounded-lg h-[400px] w-[400px]"/>
      <div className="text-center lg:text-justify w-96 lg:w-[550px] ">
        <h5 className="text-blue-600 text-2xl font-bold mb-3">About me</h5>
        <h3 className="text-gray-700 text-4xl lg:text-left font-semibold mb-3">A dedicated Front-end Developer based in Lagos Nigeria</h3>
        <p className="text-gray-700 text-lg leading-6">
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
