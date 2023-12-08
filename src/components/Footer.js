import React from 'react'
import linkedln from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"


const Footer = () => { 
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center items-center gap-5 lg:gap-96 py-14 bg-gray-600'>
      <p className='font-bold text-white text-lg lg:text-xl'>Coyright © {year}. All rights are reversed</p>
      <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/ibukun-agotola/"
              target="_blanck"
              className=" p-2 rounded hover:bg-slate-300 bg-white"
            >
              <img src={linkedln} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Ibukunjoel"
              target="_blanck"
              className=" p-2 rounded hover:bg-slate-300 bg-white"
            >
              <img src={github} alt="github" />
            </a>
          </div>
    </div>
  )
}

export default Footer