import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class layout extends Component {
  state = {
    showSideDrawer: false,
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer:false});
  }
  toggleSideDrawer = () =>{
    let curr = !this.state.showSideDrawer
    this.setState({showSideDrawer:curr});
  }
  render(){
    return (
      <Aux>
        <Toolbar clicked={this.toggleSideDrawer}></Toolbar>
        <SideDrawer 
          closed={this.sideDrawerCloseHandler} 
          open={this.state.showSideDrawer}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default layout