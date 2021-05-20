import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'

import { Context } from '../index'

const TypeBar = observer(() => {
   const { device } = useContext(Context)

   const selectTypeHandler = (type) => {
      if (device.selectedType?.id === type.id) {
         device.setSelectedType(null)
      } else {
         device.setSelectedType(type)
      }
   }

   return (
      <ListGroup>
         {device.types.map(type => 
            <ListGroup.Item 
               style={{cursor: 'pointer'}}
               active={type.id === device.selectedType?.id}
               onClick={() => selectTypeHandler(type)}
               key={type.id}
            >
               {type.name}
            </ListGroup.Item>
         )}
      </ListGroup>
   )
})

export default TypeBar
