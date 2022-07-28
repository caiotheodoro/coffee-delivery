import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { HeadCheckout } from "../Head";
import { InputCheckout } from "../Input";
import { ButtonList, InputPanel, OptionButton } from "./styles";

export function FormInfo() {


    const handleChoosePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { value } = e.currentTarget;
        console.log(value);
      }


    return (
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
                        <p>CARTÃO DE CRÉDITO</p>
                    </OptionButton>
                    <OptionButton onClick={handleChoosePayment}>
                        <Bank size={16} />
                        <p>CARTÃO DE DÉBITO</p>
                    </OptionButton>
                    <OptionButton onClick={handleChoosePayment}>
                        <Money size={16} />
                        <p>DINHEIRO</p>
                    </OptionButton>
                </ButtonList>
            </article>
        </form>
    )
}