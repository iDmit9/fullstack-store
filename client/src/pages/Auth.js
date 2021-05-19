import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { Context } from '../index'

const Auth = observer(() => {
   const {user} = useContext(Context)
   const location = useLocation()
   const history = useHistory()
   const isLogin = location.pathname === LOGIN_ROUTE
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const authHandler = async () => {
      try {
         let data
         if (isLogin) {
            data = await login(email, password)
         } else {
            data = await registration(email, password)
         }
         user.setUser(data)
         user.setIsAuth(true)
         history.push(SHOP_ROUTE)
      } catch (error) {
         alert(error.response.data.message)
      }      
   }

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Form.Control 
                  className='mt-3'
                  placeholder='Password ...'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
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
                     onClick={authHandler}
                  >
                     {isLogin ? 'Log in' : 'Register'}
                  </Button>
               </Row>
               
            </Form>
         </Card>         
      </Container>
   )
})

export default Auth

