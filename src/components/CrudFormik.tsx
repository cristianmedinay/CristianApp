import React, { useState } from 'react';
import { useFormikContext, Formik, Form, Field } from 'formik';


const initialForm = {
  email:'',
  password:'',
  
}

export const CrudFormik = () => {
  const [form, setForm] = useState<EmailPassword>(initialForm);

  type EmailPassword = {
    email: string,
    password: string,
  }

  const AutoSubmitToken = () => {
    // Grab values and submitForm from context
    const { values , setFieldValue } = useFormikContext<EmailPassword>();
    const handleChange = (e:any) =>{
      /*   setForm({...form,[name]: value}) */
      const {name,value} = e.target;
      setFieldValue('email',value)
    };
    return (
      <div>
        <input type="text" name='email' placeholder='Email' value={values.email} onChange={(e)=>handleChange(e)}/>
        <input type="text" name='password' placeholder='Password' value={values.password} onChange={(e)=>setFieldValue('password',e.target.value)}/>
      </div>
    )

  };
  


  return (
    <div>
      <h1>2-step Verification</h1>
      <p>Please enter the 6 digit code sent to your device</p>
      {<Formik
        initialValues={{ password: '',email:'' }}
        validate={values => {
          const errors = {};
         
          return errors;
        }}
        onSubmit={(values, actions) => {

          console.log(values)
          /* setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000); */
        }}
      >
        
        {({values})=>(
         <Form>
          <AutoSubmitToken />
          <button type='submit'>submit</button>
        </Form>

      )}
      </Formik>}
    </div>
  )
}
