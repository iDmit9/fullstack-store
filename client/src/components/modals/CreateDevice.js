import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'

import { Context } from '../../index'

const CreateDevice = ({show, onHide}) => {
   const {device} = useContext(Context)
   const [info, setInfo] = useState([])

   const addInfo = () => {
      setInfo([...info, {title: '', description: '', number: Date.now()}])
   }

   const deleteInfo = (number) => {      
      setInfo(info.filter(i => i.number !== number))
   }

   return (
      <Modal
         show={show}
         onHide={onHide}
         centered
      >
         <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
            Add new device
         </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Dropdown className='mt-2 mb-2'>
                  <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.types.map(type => 
                        <Dropdown.Item key={type.key}>
                           {type.name}
                        </Dropdown.Item>)}
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown className='mt-2 mb-2'>
                  <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.brands.map(brand => 
                        <Dropdown.Item key={brand.key}>
                           {brand.name}
                        </Dropdown.Item>)}
                  </Dropdown.Menu>
               </Dropdown>
               <Form.Control 
                  className='mt-2 mb-2'
                  placeholder={'Enter device name'}
               />
               <Form.Control 
                  className='mt-2 mb-2'
                  placeholder={'Enter device price'}
                  type='number'
               />
               <Form.File 
                  className='mt-2'
                  type='file'
               />
               <hr />
               <Button
                  variant={'outline-dark'}
                  onClick={addInfo}
               >
                  Add new feature
               </Button>
               {info.map(i =>
                  <Row key={i.number} className='mt-2'>
                     <Col md={4}>
                        <Form.Control 
                           placeholder='Enter property name'
                        />
                     </Col>
                     <Col md={4}>
                        <Form.Control 
                           placeholder='Enter description of the property'
                        />
                     </Col>
                     <Col md={4}>
                        <Button 
                           variant={'outline-danger'}
                           onClick={() => deleteInfo(i.number)}
                        >
                           Delete
                        </Button>
                     </Col>
                  </Row>
               )}
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
            <Button variant={'outline-success'} onClick={onHide}>Create</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default CreateDevice
