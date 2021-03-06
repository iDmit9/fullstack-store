import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Col, Container, Row } from 'react-bootstrap'

import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { Context } from '../index'
import { fetchBrands, fetchTypes, fetchDevices } from '../http/deviceAPI'
import Pages from '../components/Pages'

const Shop = observer(() => {
   const {device} = useContext(Context)

   useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
      fetchDevices(null, null, 1, device.limit).then(data => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
      })
      // eslint-disable-next-line
   }, [])

   useEffect(() => {      
      fetchDevices(
         device.selectedType?.id ?? null, 
         device.selectedBrand?.id ?? null, 
         device.page, 
         device.limit
      ).then(data => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
      })
      // eslint-disable-next-line
   }, [device.page, device.selectedType, device.selectedBrand])

   return (
      <Container>
         <Row className='mt-2'>
            <Col md={3}>
               <TypeBar />
            </Col>
            <Col md={9}>
               <BrandBar />
               <DeviceList />
               <Pages />
            </Col>
         </Row>
      </Container>
   )
})

export default Shop
