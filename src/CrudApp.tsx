import React, { useState } from 'react'
import { CrudForm } from './components/CrudForm';
import { CrudTable } from './components/CrudTable';
import { PropsDataUser } from '../src/interface/interface'
import { CrudFormik } from './components/CrudFormik';
import { Nav } from './components/Nav';
import { Contenido } from './components/Contenido';


const initialDb =[ 
  {
    firstName:'Seiya',
    constellation:"Pegaso",
    id:1,
  },
  {
    firstName:'Seiya',
    constellation:"Pegaso",
    id:2,
  }];



const CrudApp = () => {

  const [formData, setFormData] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);


  const deleteData = (id:any) =>{
    return id
  }

  const createData = (data:any) => {
    data.id = Date.now();
    setFormData((old)=> [...old,data]);
  }

 
  const updateData = (data:any) => {
    const newDatas = formData.map((e:any)=>{
      return e.id===data.id ? data : e
    })

    setFormData(newDatas);
  }
  

  console.log(formData);

  return (
    <div>
      <header className='flex items-center w-full p-4 h-[5vh]'>
        <Nav/>
      </header>
      <Contenido/>
        {/* <h1>My React App</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <CrudForm createData={createData} data={formData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} updateData={updateData} />
        <CrudTable initial={initialDb} data={formData} setDataToEdit={setDataToEdit} deleteData={deleteData} />
        <CrudFormik/> */}
    </div>
  )
}

export default CrudApp