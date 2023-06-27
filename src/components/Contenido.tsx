import React from 'react'
import { IoMdPlay } from "react-icons/io";

export const Contenido = () => {
  return (
    <div className=' h-[90vh] grid grid-colds-1 md:grid-cols-8'>
        <div className='bg-red-400 md:col-span-5 flex items-center justify-center p-16'>
            <div>
                <h1 className='text-7xl font-bold leading-[6.5rem]'>
                    Web Design Impactful Digital{" "}
                    <span className='text-primary  px-3 border-8 border-purple-500 relative'>
                        Products
                    </span>
                </h1>
                <p className='text-gray-500 text-2xl leading-[2.5rem]'>
                Desarrollamos, configuramos y ponemos en funcionamiento cualquier solución informática. 
                Participa en todos los puntos del proceso de construcción de tus herramientas informáticas. 
                Haz tu vida más fácil.
                </p>
                <div className='sm:flex items-center gap-4 bg-red-300 md:flex-col'>                    
                    <button className='btn py-2 px-8 gap-2  ' >Contact Us</button>
                    <button className='flex items-center gap-4 py-2 px-8 rounded-xl text-xl'>
                        <IoMdPlay className="bg-secondary text-primary p-4 rounded-full box-content"/>Mira mi Canal de video
                    </button>
                </div>
            </div>
        </div>
        <div className='bg-red-600 md:col-span-3 p-8 flex justify-center items-center'>
            <img src='supermario.png' className='w-80 h-1/7'/>
        </div>
    </div>
  )
}
