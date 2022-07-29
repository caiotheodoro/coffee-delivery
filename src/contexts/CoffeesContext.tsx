import {
    createContext,
    ReactNode,
    useReducer,
    useState,
} from 'react'
import { addCoffeeToCartAction } from '../reducers/cart/actions';
import { cartReducer, Coffee } from '../reducers/cart/reducer';


export interface OrderInfo {
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
    cart: Coffee[];
    total: number;
    numOfItems: number;
    orderInfo: OrderInfo;
    handleAddCoffeeToCart: (coffee: Coffee) => void;
    handleRemoveCoffeFromCart: (coffee: Coffee) => void;
    handleSetOrder: (orderInfo: OrderInfo) => void;
}




export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
    children: ReactNode
}



export function CartContextProvider({ children }: CartProviderProps) {
    const [orderInfo, setOrderInfo] = useState<OrderInfo>({} as OrderInfo)
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
        total: 0,
        numOfItems: 0,
    })


    const handleAddCoffeeToCart = (coffee: Coffee) => {
        dispatch(addCoffeeToCartAction(coffee))
        console.log(coffee)
    }

    const handleRemoveCoffeFromCart = (coffee: Coffee) => {
        dispatch(addCoffeeToCartAction(coffee))
    }

    const handleSetOrder = (orderInfo: OrderInfo) => {
        setOrderInfo(orderInfo)
    }



    const { cart,total,numOfItems } = cartState

    console.log(numOfItems)

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                handleAddCoffeeToCart,
                handleRemoveCoffeFromCart,
                orderInfo,
                handleSetOrder,
                numOfItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
