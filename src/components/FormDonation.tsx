import React from 'react'
import {Card, CardContent } from "@mui/material"
import { Formik, FormikHelpers, FormikValues,Form } from 'formik'

export const FormDonation = () => {
  return (
    <Card>
        <CardContent>
            
            {<Formik  initialValues={{}} onSubmit={()=>{}}>
                {({values,errors})=>(
                <Form>
            
            
                
                <pre>{JSON.stringify({values,errors},null,4)}</pre>
                </Form>
                )}
            </Formik>}

        </CardContent>
    </Card>
  )
}
