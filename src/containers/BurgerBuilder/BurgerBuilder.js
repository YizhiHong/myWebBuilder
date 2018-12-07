import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/Buildcontrols/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/modal'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICES = {
  Salad: 1.49,
  Cheese: .99,
  Meat: 2.99,
  Bacon: 1.49
}

class BurgerBuilder extends Component {

  state = {
    loading: false,
    ingredients: {
      Salad:0,
      Cheese:0,
      Meat:0,
      Bacon:0
    },
    totalPrice: 1.99,
    purchasable: false,
    purchasing: false
  }

  updatePurchasable (ingredients) {
    let result = Object.keys(ingredients)
    .reduce((sum, key) => {
      return sum + ingredients[key]
    },0)
    this.setState({
      purchasable: result > 0
    })
  }

  addIngredientHander = (type) => {
    const newCount = this.state.ingredients[type] + 1

    let updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = newCount;

    const price = INGREDIENTS_PRICES[type] + this.state.totalPrice

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: price
    })
    this.updatePurchasable(updatedIngredients)
  }

  lessIngredientHander = (type) => {
    const count = this.state.ingredients[type]
    if (count > 0) {
      const newCount = count - 1

      let updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = newCount;

      const price = this.state.totalPrice - INGREDIENTS_PRICES[type]

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: price
      })

      this.updatePurchasable(updatedIngredients)
    }

  }

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  modalHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  countinuePurchaseHandler = () => {

    this.setState({loading: true})

    const order = {
        ingredients: this.state.ingredients,
        price:this.state.totalPrice,
        customer: {
          name:'hong',
          email:'chihihung@gmail.com',
          address:'3414 S Lituanica Ave, Chicago, IL'
        }
    }
    
    axios.post('/order.json',order)
      .then(res => {
        this.setState({loading: false, purchasing: false})
      })
      .catch(err => {
        this.setState({loading: false})
        console.log(err)
      })
  }

  render () {
    const disabledIngredient = {...this.state.ingredients}

    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0
    }
    let order = <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice.toFixed(2)}
        purchaseCancel={this.cancelPurchaseHandler}
        purchaseContinue={this.countinuePurchaseHandler}/>

    if(this.state.loading){
      order = <Spinner />
    }


    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          {order}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          prices = {INGREDIENTS_PRICES}
          price={this.state.totalPrice.toFixed(2)}
          add={this.addIngredientHander}
          remove={this.lessIngredientHander}
          disable={disabledIngredient}
          purchasable={this.state.purchasable}
          modalHandler={this.modalHandler}/>

      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder,axios.interceptors)
