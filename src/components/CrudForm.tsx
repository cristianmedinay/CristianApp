import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikTouched, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import *  as Yup from 'yup'
import { PropsDataUser } from '../interface/interface'


const initialForm = {
    firstName:'',
    constellation:'',
    id:null
}


export const CrudForm = ({...props}) => {
  


  
  /************************************ */
  const [form, setForm] = useState(initialForm);

  const handleChange = (e:any) =>{
    setForm({...form,[e.target.name]:e.target.value})
  };

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    if(!form.firstName || !form.constellation){
        alert('datos incompletos');
        return;
    }
    if(form.id === null){
        props.createData(form);
    }else{
        props.updateData(form);
    }
    handleReset();
  };    
  const handleReset = () =>{
    setForm(initialForm);
    props.setDataToEdit(null);
  };

  useEffect(() => {
    
    console.log('first');
    if(props.dataToEdit){
        setForm(props.dataToEdit)
    }else{
        setForm(initialForm)
    }
  }, [props.dataToEdit])
  
/*   const handleChangess = (e:any) =>{
    console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  };

  const onSubmitData = (e:any,a:any) =>{
    console.log(e)
  } */
 

  return (


    <div>
     {/*  
      {  <Formik
            initialValues={initialForm}
            onSubmit={(values, actions)=>onSubmitData(values,actions)}
            validationSchema={
                Yup.object({
                    firstName:Yup.string().min(6,'debe de tener minimo 6 caracteres').required('Requerido'),
                    constellation:Yup.string().max(6,'debe de tener 6 caracteres o mas').required('Requerido'),
                })
            }
            >
              { ({handleReset,setFieldValue,values})=>(

            <Form noValidate>
                <label htmlFor="firstName">Nombre</label>
                <Field className="nombre" name="firstName" type="text"  > 
                  {({ field }:any) => {
                    return <input {...field} className="border-2"  />;
                  }}
                </Field>
                <ErrorMessage name="firstName"/>
                <label htmlFor="constellation">Constellacion</label>
                <Field name="constellation" type="text" />
                <ErrorMessage name="constellation"/>
                <button type="submit" >enviar</button>
                <button type="reset" onClick={handleReset} >Limpiar</button>
            </Form>
            )
        }
        </Formik>} */}


        <h3>Agregar</h3>
        <form onSubmit={handleSubmit} >
            <input type="text" name="firstName" id="" placeholder='firstName' onChange={handleChange} value={form.firstName}/>
            <input type="text" name="constellation" id="" placeholder='Constellacion' onChange={handleChange} value={form.constellation}/>
            <button type="submit" >Enviar</button>
            <button type="reset" onClick={handleReset}>Limpiar</button>
        </form>
    </div>
  )
}
