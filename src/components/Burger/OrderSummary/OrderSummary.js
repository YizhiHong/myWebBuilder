import React from 'react'

import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  let summary = Object
  .keys(props.ingredients)
  .map((item) => {
    return <li key={item}>{item}: {props.ingredients[item]}</li>
  })
  return (
    <div>
      <h4>Order Summary</h4>
      <ul>
        {summary}
      </ul>
      <h3>Total price: $<strong>{props.totalPrice}</strong></h3>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCancel}>Cancel</Button>
      <Button btnType='Success' clicked={props.purchaseContinue}>Continue</Button>
    </div>)
  }

  export default OrderSummary
