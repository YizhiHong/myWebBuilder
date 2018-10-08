import React from 'react'

import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const NavItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavItem link='/' active>Burger Builder</NavItem>
    <NavItem link='/'>Check Out</NavItem>
  </ul>
)

export default NavItems
