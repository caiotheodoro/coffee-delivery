import { useState } from "react";
import { FormInfo } from "./components/FormInfo";
import { OrderInfo } from "./components/OrderInfo";
import {  CheckoutContainer, InfoContainer, OrderContainer } from "./styles";

export function Checkout() {



 

  return (
    <CheckoutContainer>
      <InfoContainer>
        <h1>Complete seu pedido</h1>
        <FormInfo />
      </InfoContainer>
      <OrderContainer>
        <h1>Cafés selecionados</h1>
        <OrderInfo />
      </OrderContainer>
    </CheckoutContainer>
  )
}
