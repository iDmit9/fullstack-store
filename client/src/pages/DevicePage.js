import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
   const device = {id: 3, name: 'Galaxy A52 Black', price: 400, rating: 4.7, img: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/4/b4e69e6a88aee7556e0d71189eab7dcb1e841377_241456_1.jpg'}
   const description = [
      {id: 1, title: 'Memory', description: '5 Gb'},
      {id: 2, title: 'Camera', description: '12 Mp'},
      {id: 3, title: 'CPU', description: 'Exynos 7 Octa'},
      {id: 4, title: 'Number of Cores', description: '8'},
      {id: 5, title: 'Battery', description: '5000 mAh'},
   ]
   return (
      <Container className='mt-3'>
         <Row>
            <Col md={4}>
               <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
               <Row className='d-flex flex-column align-items-center'>
                  <h2>{device.name}</h2>
                  <div 
                     className='d-flex align-items-center justify-content-center'
                     style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                  >
                     {device.rating}
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
            {description.map((info, index) => 
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
