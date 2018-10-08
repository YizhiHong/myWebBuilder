import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>menu</div>
    <Logo></Logo>
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
