import React from 'react'

export const CrusTableRow = ({...props}) => {

  return (
    <>
    {
     
      <tr >
          <td>{props.data.firstName}</td><td>{props.data.constellation}</td>
          <td><button onClick={()=>props.setDataToEdit(props.data)}>Editar</button><button >Eliminar</button></td>
      </tr>
     
    }
    </>
     
     
  )
}
