import {
    createContext,
    ReactNode,
    useReducer,
    useState,
} from 'react'

interface Coffee {
    id: string;
    name: string;
    price: number;
    amount: number;
}

interface OrderInfo {
    cep: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    district: string;
    payment: string;
}

interface CartContextType {
    cart: Coffee[]
}


interface CartState {
    cart: Coffee[]

}

export const CartContext = createContext({} as CartContextType)

interface CycleProviderProps {
    children: ReactNode
}



export function CyclesContextProvider({ children }: CycleProviderProps) {
    const [cartState, dispatch] = useReducer((state: CartState, action: any) => {
        switch (action.type) {
            case 'ADD':
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            case 'REMOVE':
                return {
                    ...state,
                    cart: state.cart.filter((coffee: Coffee) => coffee.id !== action.payload)
                }
            default:
                return state
        }
    }, {
        cart: []

    })

    const [orderInfo, setOrderInfo] = useState<OrderInfo>({} as OrderInfo)

    

    const { cart } = cartState
    return (
        <CartContext.Provider
            value={{
                cart,

            }}
        >
            {children}
        </CartContext.Provider>
    )
}
