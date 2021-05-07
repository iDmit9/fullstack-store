import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { Context } from '../index'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = () => {
   const {user} = useContext(Context)
   return (
      <Navbar bg="dark" variant="dark">
         <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>DeviceBuy</NavLink>
         <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
         </Nav>
      </Navbar>
   )
}

export default NavBar
