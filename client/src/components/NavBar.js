import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
   const {user} = useContext(Context)   
   const history = useHistory()

   const logOut = () => {      
      localStorage.setItem('token', '')
      user.setUser({})
      user.setIsAuth(false)
   }

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>DeviceBuy</NavLink>
            {user.isAuth  
               ? <Nav className="ml-auto" style={{color: 'white'}}>
                  <Button 
                     variant={'outline-light'} 
                     onClick={() => history.push(ADMIN_ROUTE)}
                  >
                     Admin
                  </Button>
                  <Button 
                     variant={'outline-light'} 
                     onClick={() => logOut()} 
                     className='ml-2'
                  >
                     Logout
                  </Button>
               </Nav>
               : <Nav className="ml-auto" style={{color: 'white'}}>
                  <Button 
                     variant={'outline-light'} 
                     onClick={() => history.push(LOGIN_ROUTE)}
                  >
                     Auth
                  </Button>
               </Nav>
            }
         </Container>
      </Navbar>
   )
})

export default NavBar
