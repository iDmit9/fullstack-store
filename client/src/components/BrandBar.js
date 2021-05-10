import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Card, Row } from 'react-bootstrap'

import { Context } from '../index'

const BrandBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <Row className='d-flex'>
         {device.brands.map(brand => 
            <Card
               key={brand.id}
               style={{cursor: 'pointer'}}
               className='p-3 mr-2 mb-2'
               border={brand.id === device.selectedBrand.id ? 'danger' : 'light' }
               onClick={() => device.setSelectedBrand(brand)}
            >
               {brand.name}
            </Card>)}
      </Row>
   )
})

export default BrandBar
