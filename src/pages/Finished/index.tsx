import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeesContext";
import { BoxInfo, CheckoutContainer, GradientBox, Item } from "./styles";

export function Finished() {
    const {orderInfo} = useContext(CartContext);

    const {city,district,number,payment,street,state} = orderInfo


    const paymentText = payment === 'credit' ? 'Cartão de crédito' : payment === 'debit' ? 'Cartão de débito' : 'Dinheiro'
    return (
        <CheckoutContainer>
                <span>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </span>
            <div>
                    <GradientBox>
                <BoxInfo>
                    <Item itemColor="purple">
                        <span>
                            <MapPin weight="fill" />
                        </span>
                        <div>
                            <h2>
                                Entrega em <span>{`${street}, ${number}`}</span>
                            </h2>
                            <p>
                            {`${district} - ${city}, ${state}`}
                            </p>
                        </div>
                    </Item>

                    <Item itemColor="yellow">
                        <span>
                            <Timer weight="fill" />
                        </span>
                        <div>
                            <h2>
                                Previsão de entrega
                            </h2>
                            <p>
                                <span>20 min - 30 min </span>
                            </p>
                        </div>
                    </Item>
                    <Item itemColor="yellowDark">
                        <span>
                            <CurrencyDollarSimple weight="fill" />
                        </span>
                        <div>
                            <h2>
                                Pagamento na entrega
                            </h2>
                            <p>
                                <span>{paymentText}</span>
                            </p>
                        </div>
                    </Item>
                </BoxInfo>
                </GradientBox>

                <img src={"src/assets/Illustration.svg"} alt="Entregador" />
            </div>
        </CheckoutContainer>
    )
}