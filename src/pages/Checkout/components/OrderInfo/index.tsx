import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ConfirmPaymentButton, CounterButton, ItemContainer, PricingContainer, RemoveButton } from "./styles";

export function OrderInfo() {
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter((state) => state + 1)
    }

    const handleRemove = () => {
        counter > 0 && setCounter((state) => state - 1);
    }


    return (
        <article>
            <ItemContainer>
                <img src={`src/assets/coffees/Type=Árabe.png`} alt="" />
                <div>
                    <h1>Expresso Tradicional</h1>
                    <span>
                        <CounterButton><Minus size={14} weight="fill" onClick={handleRemove} /> {counter} <Plus size={14} weight="fill" onClick={handleAdd} /></CounterButton>
                        <RemoveButton><Trash size={16} />REMOVER</RemoveButton>
                    </span>
                </div>
                <h2>R$ 9,90</h2>
            </ItemContainer>
            <ItemContainer>
                <img src={`src/assets/coffees/Type=Árabe.png`} alt="" />
                <div>
                    <h1>Expresso Tradicional</h1>
                    <span>
                        <CounterButton><Minus size={14} weight="fill" onClick={handleRemove} /> {counter} <Plus size={14} weight="fill" onClick={handleAdd} /></CounterButton>
                        <RemoveButton><Trash size={16} />REMOVER</RemoveButton>
                    </span>
                </div>
                <h2>R$ 9,90</h2>
            </ItemContainer>
            <PricingContainer>
                <div>
                    <span>
                        <h2>Total de itens</h2>
                        <h2>R$ 9,90</h2>
                    </span>
                    <span>
                        <h2>Entrega</h2>
                        <h2>R$ 3,50</h2>
                    </span>
                    <span>
                        <h1>Total</h1>
                        <h1>R$ 12,40</h1>
                    </span>
                </div>
                <NavLink to="/finished" title="Localização">
                    <ConfirmPaymentButton>CONFIRMAR PEDIDO</ConfirmPaymentButton>
                </NavLink>
            </PricingContainer>
        </article>
    )
}