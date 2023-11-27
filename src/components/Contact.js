import React from 'react'
import location from "../assets/icons/location.svg"
import mail from "../assets/icons/mail.svg"

const Contact = () => {
  return (
    <div className='bg-white flex justify-center lg:items-start items-center flex-col py-32 px-28 gap-5'>
        <h5 className="text-blue-600 text-xl font-bold">CONTACT</h5>
        <h3 className="text-gray-700 text-2xl text-center lg:text-left font-semibold">Let's talk, I'm available for your next project.</h3>
        <div className='flex justify-center flex-col lg:flex-row lg:justify-start items-center gap-5'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-4'>
                <div className='flex justify-center items-center p-1 shadow-md hover:bg-[#f5f5f5] rounded-full h-12 w-12'>
                    <img src={location} alt='Lagos, Nigeria' className='h-8 w-8' />
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-x-3 lg:justify-start items-center'>
                    <p className='font-bold text-base text-blue-700'>Location</p>
                    <p>Lagos, Nigeria</p>
                </div>
            </div>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-4'>
                <div className='flex justify-center items-center p-1 shadow-md hover:bg-[#f5f5f5] rounded-full h-12 w-12'>
                    <img src={mail} alt='Lagos, Nigeria' className='h-8 w-8' />
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-x-3 lg:justify-start items-center'>
                    <p className='font-bold text-base text-blue-700'>Mail</p>
                    <a href='mailto:ibukunjoelagotola@gmail.com'>ibukunjoelagotola@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact