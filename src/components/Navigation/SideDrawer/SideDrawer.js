import React from 'react'

import logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'


const SideDrawer = (props) => (
  <div>
    <logo></logo>
    <nav>
      <NavItems></NavItems>
    </nav>
  </div>
)

export default SideDrawer
