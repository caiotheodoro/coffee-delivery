import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { HeadCheckout } from "./components/Head";
import { InputCheckout } from "./components/Input";
import { ButtonList, OptionButton, CheckoutContainer, InfoContainer, InputPanel, OrderContainer, CounterButton, RemoveButton, ItemContainer, PricingContainer, ConfirmPaymentButton } from "./styles";

export function Checkout() {
  const [counter, setCounter] = useState(0);


  const handleAdd = () => {
    setCounter((state) => state + 1)
  }

  const handleRemove = () => {
    counter > 0 && setCounter((state) => state - 1);
  }

  const handleChoosePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    console.log(value);
  }

  return (
    <CheckoutContainer>
      <InfoContainer>
        <h1>Complete seu pedido</h1>
        <form>
          <article>
            <HeadCheckout
              iconColor="yellowDark"
              title=" Endereço de entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} />}
            />
            <InputPanel>
              <InputCheckout type="number" placeholder="CEP" widthInput="12.5rem" />
              <InputCheckout type="text" placeholder="Rua" widthInput="100%" />
              <div>
                <InputCheckout type="number" placeholder="Número" widthInput="12.5rem" />
                <InputCheckout type="text" placeholder="Complemento" widthInput="100%" />
              </div>
              <div>
                <InputCheckout type="text" placeholder="Bairro" widthInput="12.5rem" />
                <InputCheckout type="text" placeholder="Cidade" widthInput="100%" />
                <InputCheckout type="text" placeholder="UF" widthInput={'3.75rem'} />
              </div>
            </InputPanel>
          </article>
          <article>
            <HeadCheckout
              iconColor="purple"
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} />}
            />

            <ButtonList>
              <OptionButton onClick={handleChoosePayment}>
                <CreditCard size={16} />
                <h1>CARTÃO DE CRÉDITO</h1>
              </OptionButton>
              <OptionButton onClick={handleChoosePayment}>
                <Bank size={16} />
                <h1>CARTÃO DE DÉBITO</h1>
              </OptionButton>
              <OptionButton onClick={handleChoosePayment}>
                <Money size={16} />
                <h1>DINHEIRO</h1>
              </OptionButton>
            </ButtonList>
          </article>
        </form>
      </InfoContainer>
      <OrderContainer>
        <h1>Cafés selecionados</h1>
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
            <ConfirmPaymentButton>CONFIRMAR PEDIDO</ConfirmPaymentButton>
          </PricingContainer>
        </article>
        
      </OrderContainer>
    </CheckoutContainer>
  )
}
