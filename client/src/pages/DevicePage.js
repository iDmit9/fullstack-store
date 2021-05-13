import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import bigStar from '../assets/bigStar.png'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {
   const [device, setDevice] = useState({info: []})
   const {id} = useParams()
   
   useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
      // eslint-disable-next-line
   }, [])

   return (
      <Container className='mt-3'>
         <Row>
            <Col md={4}>
               <Image width={300} height={300} src={device.img && process.env.REACT_APP_API_URL + device.img} />
            </Col>
            <Col md={4}>
               <Row className='d-flex flex-column align-items-center'>
                  <h2>{device.name}</h2>
                  <div 
                     className='d-flex align-items-center justify-content-center'
                     style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                  >
                     {device.rating || 0}
                  </div>
               </Row>
            </Col>
            <Col md={4}>
               <Card
                  className='d-flex flex-column align-items-center justify-content-around'
                  style={{width: 300, height: 300, fontSize:32, border: '5px solid lightgrey'}}
               >
                  <h3>${device.price}</h3>
                  <Button variant={'outline-dark'}>Add to Cart</Button>
               </Card>
            </Col>
         </Row>
         <Row className='d-flex flex-column m-3'>
            <h1>Product Key Features</h1>
            {device.info.map((info, index) => 
               <Row 
                  key={info.id} 
                  style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}}
               >
                  {info.title}: {info.description}
               </Row>
            )}
         </Row>         
      </Container>
   )
}

export default DevicePage
