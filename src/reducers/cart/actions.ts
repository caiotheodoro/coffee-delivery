import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function addCoffeeToCartAction(coffeeToCart: Coffee) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
        coffeeToCart,
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
