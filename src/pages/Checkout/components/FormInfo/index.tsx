import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CartContext, OrderInfo } from "../../../../contexts/CoffeesContext";
import { HeadCheckout } from "../Head";
import { ButtonList, InputCheckout, InputPanel, OptionButton } from "./styles";

export function FormInfo(this: any) {

    const { register } = useFormContext()
    const { handleSetPayment } = useContext(CartContext)

    const handleChoosePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { value } = e.currentTarget;
        handleSetPayment(value)
    }

    function mascara(t: HTMLInputElement, mask: string) {
        var i = t.value.length;
        var saida = mask.substring(1, 0);
        var texto = mask.substring(i)
        if (texto.substring(0, 1) != saida) {
            t.value += texto.substring(0, 1);
        }
    }

    return (
        <>
            <article>
                <HeadCheckout
                    iconColor="yellowDark"
                    title=" Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine size={22} />}
                />
                <InputPanel>
                    <InputCheckout type="text" id="cep" placeholder="CEP" widthInput="12.5rem" {...register('cep')} required max={9} onKeyUp={(e) => mascara(e.target, '#####-###')} />
                    <InputCheckout type="text" id="street" placeholder="Rua" widthInput="100%" {...register('street')} required />
                    <div>
                        <InputCheckout type="number" id="number" placeholder="Número" widthInput="12.5rem" {...register("number")} required />
                        <InputCheckout type="text" id="complement" placeholder="Complemento" widthInput="100%"  {...register("complement")} />
                    </div>
                    <div>
                        <InputCheckout type="text" id="district" placeholder="Bairro" widthInput="12.5rem" {...register("district")} required />
                        <InputCheckout type="text" id="city" placeholder="Cidade" widthInput="100%" {...register("city")} required />
                        <InputCheckout type="text" id="state" placeholder="UF" widthInput={'3.75rem'} {...register("state")} required />
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

                <ButtonList >
                    <OptionButton onClick={handleChoosePayment} value="credit">
                        <CreditCard size={16} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </OptionButton>
                    <OptionButton onClick={handleChoosePayment} value="debit">
                        <Bank size={16} />
                        <p>CARTÃO DE DÉBITO</p>
                    </OptionButton>
                    <OptionButton onClick={handleChoosePayment} value="cash">
                        <Money size={16} />
                        <p>DINHEIRO</p>
                    </OptionButton>
                </ButtonList>
            </article>
        </>

    )
}