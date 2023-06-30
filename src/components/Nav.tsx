import React, { useState } from 'react'
import { IoLogoIonic,IoIosMenu,IoMdClose } from "react-icons/io";

export const Nav = () => {

  const Links=[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"CONTACT",link:"/"},
  ]

  const [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0 flex flex-col z-50'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
              <span className='text-3xl text-indigo-600 mr-1 '>
                <IoLogoIonic/>
              </span>
              Designer
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
               { open ? <IoMdClose/> : <IoIosMenu/> }
            </div>
                
                

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                  Links.map((link)=>{
                    return <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                      <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                  })
                }
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
                Get Started
            </button>
            
            </ul>

        </div>
        
    </div>
  )
}
