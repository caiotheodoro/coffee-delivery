import { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInfo } from "./components/FormInfo";
import { OrderInfo } from "./components/OrderInfo";
import { CheckoutContainer, InfoContainer, OrderContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from "../../contexts/CoffeesContext";
import { toast } from "react-toastify";


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

  const { handleSetOrder, cart } = useContext(CartContext)

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
  
  const { handleSubmit, watch, reset } = newOrderForm

  const handleConfirmOrder = (data: NewOrderFormData) => {
    cart.length > 0 ? (
      handleSetOrder(data),
      reset()
    ) : toast.error("Carrinho vazio")
  }

  const cep = watch('cep')

  useEffect(() => {

    cep.length === 9 &&
      fetch(`https://viacep.com.br/ws/${cep.replace(/[^0-9]/g, '')}/json/`)
        .then(res => res.json())
        .then(res => {
          newOrderForm.setValue('street', res.logradouro)
          newOrderForm.setValue('city', res.localidade)
          newOrderForm.setValue('state', res.uf)
          newOrderForm.setValue('district', res.bairro)
        }).catch(err => toast.error(`Erro ao buscar o CEP: ${err}`))

  }, [cep])



  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(handleConfirmOrder)}>
        <InfoContainer>
          <h1>Complete seu pedido</h1>
          <FormProvider {...newOrderForm}>
            <FormInfo />
          </FormProvider>

        </InfoContainer>
        <OrderContainer>
          <h1>Cafés selecionados</h1>
          <OrderInfo />
        </OrderContainer>
      </form>
    </CheckoutContainer>
  )
}
