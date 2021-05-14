import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { Context } from '../../index'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'

const CreateDevice = observer(({show, onHide}) => {
   const {device} = useContext(Context)
   const [info, setInfo] = useState([])
   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [file, setFile] = useState(null)
   
   useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
      // eslint-disable-next-line
   }, [])

   const addInfo = () => {
      setInfo([...info, {title: '', description: '', number: Date.now()}])
   }

   const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number 
         ? {...i, [key]:value}
         : i         
      ))
   }
   
   const deleteInfo = (number) => {      
      setInfo(info.filter(i => i.number !== number))
   }
   
   const selectFile = e => {
      setFile(e.target.files[0])
   }
   
   const addDevice = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createDevice(formData).then(data => onHide())
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
                  <Dropdown.Toggle>{device.selectedType.name || 'Choose Type'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.types.map(type => 
                        <Dropdown.Item 
                           key={type.key}
                           onClick={() => device.setSelectedType(type)}
                        >
                           {type.name}
                        </Dropdown.Item>)}
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown className='mt-2 mb-2'>
                  <Dropdown.Toggle>{device.selectedBrand.name || 'Choose Brand'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.brands.map(brand => 
                        <Dropdown.Item 
                           key={brand.key}                           
                           onClick={() => device.setSelectedBrand(brand)}
                        >
                           {brand.name}
                        </Dropdown.Item>)}
                  </Dropdown.Menu>
               </Dropdown>
               <Form.Control 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='mt-2 mb-2'
                  placeholder={'Enter device name'}
               />
               <Form.Control 
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                  className='mt-2 mb-2'
                  placeholder={'Enter device price'}
                  type='number'
               />
               <Form.File 
                  className='mt-2'
                  onChange={selectFile}
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
                           value={i.title}
                           onChange={(e) => 
                              changeInfo('title', e.target.value, i.number)
                           }
                           placeholder='Enter property name'
                        />
                     </Col>
                     <Col md={4}>
                        <Form.Control 
                           value={i.description}
                           onChange={(e) => 
                              changeInfo('description', e.target.value, i.number)
                           }
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
            <Button variant={'outline-success'} onClick={addDevice}>Create</Button>
         </Modal.Footer>
      </Modal>
   )
})

export default CreateDevice
