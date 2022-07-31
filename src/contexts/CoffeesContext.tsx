import {
    createContext,
    ReactNode,
    useEffect,
    useReducer,
    useState,
} from 'react'
import { addCoffeeToCartAction, reduceCoffeeFromCartAction, removeCoffeeFromCartAction } from '../reducers/cart/actions';
import { cartReducer, Coffee } from '../reducers/cart/reducer';
import {useNavigate } from 'react-router-dom';
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
    handleReduceCoffeFromCart: (coffee: Coffee) => void;
    handleSetOrder: (orderInfo: OrderInfo) => void;
    handleSetPayment: (payment: string) => void;
}




export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
    children: ReactNode
}



export function CartContextProvider({ children }: CartProviderProps) {
    const [orderInfo, setOrderInfo] = useState<OrderInfo>({} as OrderInfo)
    const [payment, setPayment] = useState<string>('')
    const navigate = useNavigate()
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
        total: 0,
        numOfItems: 0,
    },  () => {
        const cartStored = localStorage.getItem(
          '@coffee-delivery:cart-state-1.0.0',
        )
        if (cartStored) {
          return JSON.parse(cartStored)
        }
        return {
            cart: [],
            total: 0,
            numOfItems: 0,
        }
      })


    const handleAddCoffeeToCart = (coffee: Coffee) => {
        dispatch(addCoffeeToCartAction(coffee))
    }
    const handleSetPayment = (payment: string) => {
        setPayment(payment)
    }

    const handleReduceCoffeFromCart = (coffee: Coffee) => {
        dispatch(reduceCoffeeFromCartAction(coffee))
    }

    const handleRemoveCoffeFromCart = (coffee: Coffee) => {
        dispatch(removeCoffeeFromCartAction(coffee))
    }

    const handleSetOrder = (orderInfo: OrderInfo) => {
        setOrderInfo({...orderInfo, payment: payment})
        
        navigate('/finished')
            

    }

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState)
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
      }, [cartState])

    const { cart,total,numOfItems } = cartState


    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                handleAddCoffeeToCart,
                handleRemoveCoffeFromCart,
                handleReduceCoffeFromCart,
                orderInfo,
                handleSetPayment,
                handleSetOrder,
                numOfItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
