import React from 'react'
import { CrusTableRow } from './CrusTableRow'
import { PropsDataUser } from '../interface/interface'

export const CrudTable = ({...props}) => {
    console.log(props.data)
  return (
    <div>
        <h3>Tabla de Datos</h3>
        
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Constelacion</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>

           
                {/*  <CrusTableRow data={props.dataUser}/> */}
          {
              props.data.map((el:any)=><CrusTableRow key={el.id} data={el} setDataToEdit={props.setDataToEdit}/> )
            
          }
            </tbody>
        </table>

    </div>
  )
}
