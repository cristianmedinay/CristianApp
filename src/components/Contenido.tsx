import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
export const Contenido = () => {
  return (
    <div className=' h-[90vh] grid grid-colds-1 md:grid-cols-8'>
        <div className=' md:col-span-5 flex items-center justify-center p-16'>
            <div>
                <h1 className='text-7xl font-bold leading-[6.5rem]'>
                    Web Design Impactful Digital{" "}
                    <span className='text-primary  px-3 border-8 border-purple-500 '>
                        Products
                    </span>
                </h1>
                    <p className='text-gray-500 text-2xl leading-[2.5rem] m-5'>
                    Desarrollamos, configuramos y ponemos en funcionamiento cualquier solución informática. 
                    Participa en todos los puntos del proceso de construcción de tus herramientas informáticas. 
                    Haz tu vida más fácil.
                    </p>
                <div className=' xs:flex-col xs:items-center gap-4 flex items-center '>                    
                    <button className='btn py-2 px-8 gap-2  ' >Contact Us</button>
                    <button className='flex items-center gap-4 py-2 px-8 rounded-xl text-xl'>
                        <IoMdPlay className="bg-secondary text-primary p-4 rounded-full box-content"/>Mira mi Canal de video
                    </button>
                </div>
            </div>
        </div>
        <div className='md:col-span-3 flex justify-center items-center relative z-10 xs:top-1/4 sm:top-1/4 '>
            
            <img src='supermario.png' className='max-width:32rem h-[450px] object-cover -mt-28 '/>
            <RiCheckboxBlankCircleLine className='absolute top-1/2 -translate-y-1/2 left-1/2 outline-4 -translate-x-1/2 text-[380px] text-secondary bg-primary rounded-full -z-10 '/>
            
        </div>
       
    </div>
  )
}
