import React from 'react'

import BuildControl from './Buildcontrol/BuildControl'
import classes from './BuildControls.css'

const controls = [
  {label:'Meat',type:'Meat'},
  {label:'Salad',type:'Salad'},
  {label:'Bacon',type:'Bacon'},
  {label:'Cheese',type:'Cheese'}
]

const buildControls = (props) =>  {

  return (
    <div className={classes.BuildControls}>
      <div> CurrentPrice : {props.price} </div>
      {controls.map((item) => (
        <BuildControl
          price={props.prices[item.type]}
          added={() => props.add(item.type)}
          removed={() => props.remove(item.type)}
          key={item.label}
          label={item.label}
          disable={props.disable[item.label]}/>
      ))}
      <button
        disabled={!props.purchasable}
        onClick={props.modalHandler}
        className={classes.OrderButton}>ORDER NOW</button>
    </div>
  )

}

export default buildControls
