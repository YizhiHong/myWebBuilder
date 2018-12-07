import React from 'react'

import Burgeringredient from './Burgeringredient/Burgeringredient'
import classes from './Burger.css'

const Burger = (props) =>  {
    let ingredients = Object.keys(props.ingredients)
      .map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_,index) => (
          <Burgeringredient key={ingredient + index} type={ingredient}/>
        ))
    }).reduce((p, c) => { return p.concat(c)}, [])

    if (ingredients.length === 0){
      ingredients = <div>Please add some ingredients!!!</div>
    }


    return (
      <div className={classes.Burger}>
        <Burgeringredient type='bread-top'/>
        {ingredients}
        <Burgeringredient type='bread-bottom'/>
      </div>
    )

}

export default Burger
