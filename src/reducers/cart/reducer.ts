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
                const item = draft.cart.find(item => item.id === action.payload.coffeeToAdd.id)
                if (item) {
                    item.amount = action.payload.coffeeToAdd.amount
                }
                else {
                    draft.cart.push(action.payload.coffeeToAdd)
                }
                draft.total = draft.cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
                draft.numOfItems = draft.cart.reduce((acc, curr) => acc + curr.amount, 0)
            })

        case ActionTypes.REDUCE_FROM_CART:
            return produce(state, (draft) => {
                const item = draft.cart.find(item => item.id === action.payload.coffeeToReduce.id)
                if (item) {
                    item.amount -= 1
                    if (item.amount === 0) {
                        draft.cart = draft.cart.filter(item => item.id !== action.payload.coffeeToReduce.id)
                    }
                }
                draft.total = draft.cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
                draft.numOfItems  = draft.cart.reduce((acc, curr) => acc + curr.amount, 0)
            })
            case ActionTypes.REMOVE_FROM_CART:
                return produce(state, (draft) => {
                    draft.cart = draft.cart.filter(item => item.id !== action.payload.coffeeToRemove.id)
                    draft.total = draft.cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
                    draft.numOfItems  = draft.cart.reduce((acc, curr) => acc + curr.amount, 0)
                })
            case ActionTypes.RESET_CART:
                return produce(state, (draft) => {
                    draft.cart = []
                    draft.total = 0
                    draft.numOfItems  = 0
                })

        default:
            return state
    }
}