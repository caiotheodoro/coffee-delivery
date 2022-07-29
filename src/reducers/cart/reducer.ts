import { ActionTypes } from "./actions";
import { produce } from 'immer'
export interface Coffee {
    id: number;
    name: string;
    price: number;
    src: string;
    amount: number;
}


interface CartState {
    cart: Coffee[]
    total: number;
    numOfItems: number;
}


export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return produce(state, (draft) => {
                draft.cart.push(action.payload.coffeeToCart);
                draft.total = draft.total + (action.payload.coffeeToCart.price * action.payload.coffeeToCart.amount)
                draft.numOfItems = draft.numOfItems + action.payload.coffeeToCart.amount
            })

        case ActionTypes.REMOVE_FROM_CART:
            return produce(state, (draft) => {
                draft.cart.splice(action.payload.coffeeToRemove, 1)
                draft.total = draft.total - (action.payload.coffeeToRemove.price * action.payload.coffeeToRemove.amount)
                draft.numOfItems = draft.numOfItems - action.payload.coffeeToRemove.amount
            })

        default:
            return state
    }
}