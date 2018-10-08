import React from 'react'

import classes from './BuildControl.css'


const buildControl = (props) =>  {

    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.removed} disabled={props.disable} className={classes.Less}>less</button>
        <button onClick={props.added} className={classes.More}>more</button>
        <div> ${props.price}</div>
      </div>
    )

}

export default buildControl
