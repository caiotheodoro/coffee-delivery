import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REDUCE_FROM_CART = 'REDUCE_FROM_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function addCoffeeToCartAction(coffeeToAdd: Coffee) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffeeToAdd,
    },
  }
}



export function reduceCoffeeFromCartAction(coffeeToReduce: Coffee) {
  return {
      type: ActionTypes.REDUCE_FROM_CART,
      payload: {
          coffeeToReduce,
      },
  }
}


export function removeCoffeeFromCartAction(coffeeToRemove: Coffee) {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            coffeeToRemove,
        },
    }
}
