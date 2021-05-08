import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Context } from '../index'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
   const {user} = useContext(Context)
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>DeviceBuy</NavLink>
            {user.isAuth  
               ? <Nav className="ml-auto" style={{color: 'white'}}>
                  <Button variant={'outline-light'}>Admin</Button>
                  <Button variant={'outline-light'} className='ml-2'>Logout</Button>
               </Nav>
               : <Nav className="ml-auto" style={{color: 'white'}}>
                  <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Auth</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   )
})

export default NavBar
