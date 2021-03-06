import React from 'react'

import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/Aux'

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses[1] = classes.Open
  }
  return (
  <Aux>
    <Backdrop clicked={props.closed} show={props.open}></Backdrop>
    <div className={attachedClasses.join(" ")}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems></NavItems>
      </nav>
    </div>
  </Aux>
  
)}

export default SideDrawer
