import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../contexts/CoffeesContext";
import { formatPrice } from "../../../../utils/formatPrice";
import { ConfirmPaymentButton, CounterButton, ItemContainer, PricingContainer, RemoveButton } from "./styles";

export function OrderInfo() {
    const { cart,total,handleAddCoffeeToCart,handleReduceCoffeFromCart,handleRemoveCoffeFromCart } = useContext(CartContext)


   

    const totalWithDelivery = total + 3.5
    return (
        <article>
            <>
            {cart.map(coffee => (
            <ItemContainer>
                <img src={`src/assets/coffees/Type=${coffee.src}.png`} alt={coffee.name} />
                <div>
                    <h1>{coffee.name}</h1>
                    <span>
                        <CounterButton><Minus size={14} weight="fill" onClick={() => handleReduceCoffeFromCart({...coffee})} /> {coffee.amount} <Plus size={14} weight="fill" onClick={() => handleAddCoffeeToCart({...coffee, amount: coffee.amount + 1 })} /></CounterButton>
                        <RemoveButton onClick={() => handleRemoveCoffeFromCart({...coffee})}><Trash size={16} />REMOVER</RemoveButton>
                    </span>
                </div>
                <h2>R$ {formatPrice(coffee.price)}</h2>
            </ItemContainer>
            ))}
            </>
           
            <PricingContainer>
                <div>
                    <span>
                        <h2>Total de itens</h2>
                        <h2>R$ {formatPrice(total)}</h2>
                    </span>
                    <span>
                        <h2>Entrega</h2>
                        <h2>R$ 3,50</h2>
                    </span>
                    <span>
                        <h1>Total</h1>
                        <h1>R$ {formatPrice(totalWithDelivery)}</h1>
                    </span>
                </div>
                <NavLink to="/finished" title="Localização">
                    <ConfirmPaymentButton>CONFIRMAR PEDIDO</ConfirmPaymentButton>
                </NavLink>
            </PricingContainer>
        </article>
    )
}