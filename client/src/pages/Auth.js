import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
   const location = useLocation()
   const isLogin = location.pathname === LOGIN_ROUTE

   return (
      <Container 
         className='d-flex justify-content-center align-items-center'
         style={{height: window.innerHeight - 55}}
      >
         <Card style={{width: 600}} className='p-5'>
            <h2 className='m-auto'>{isLogin ? 'Log in' : 'Register'}</h2>
            <Form className='d-flex flex-column'> 
               <Form.Control 
                  className='mt-3'
                  placeholder='Login ...'
               />
               <Form.Control 
                  className='mt-3'
                  placeholder='Password ...'
               />
               <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                  {isLogin ? <div>
                     New customer? <NavLink to={REGISTRATION_ROUTE}>
                        Register
                     </NavLink>
                  </div>
                  : <div>
                     Have an account? <NavLink to={LOGIN_ROUTE}>
                        Sign-In
                     </NavLink>
                  </div>}
                  <Button 
                     variant={'outline-success'}
                  >
                     {isLogin ? 'Log in' : 'Register'}
                  </Button>
               </Row>
               
            </Form>
         </Card>         
      </Container>
   )
}

export default Auth

