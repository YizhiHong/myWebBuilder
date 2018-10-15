import React from 'react'

import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'


const SideDrawer = (props) => (
  <div className={classes.SideDrawer}>
    <Logo />
    <nav>
      <NavItems></NavItems>
    </nav>
  </div>
)

export default SideDrawer
