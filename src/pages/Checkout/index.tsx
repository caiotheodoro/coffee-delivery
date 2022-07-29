import { useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInfo } from "./components/FormInfo";
import { OrderInfo } from "./components/OrderInfo";
import { CheckoutContainer, InfoContainer, OrderContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from "../../contexts/CoffeesContext";


const newOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  city: zod.string(),
  state: zod.string(),
  district: zod.string(),
  payment: zod.string(),
})



type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>


export function Checkout() {

  const { handleSetOrder } = useContext(CartContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      state: "",
      district: "",
      payment: "",
    },
  })

  const handleConfirmOrder = (data: NewOrderFormData) => {
    handleSetOrder(data)
  }

  const { watch, handleSubmit, reset } = newOrderForm

  return (
    <CheckoutContainer>
      <InfoContainer>
        <h1>Complete seu pedido</h1>
        <form action="" onSubmit={handleSubmit(handleConfirmOrder)}>
          <FormProvider {...newOrderForm}>
            <FormInfo />
          </FormProvider>
        </form>

      </InfoContainer>
      <OrderContainer>
        <h1>Cafés selecionados</h1>
        <OrderInfo />
      </OrderContainer>
    </CheckoutContainer>
  )
}
