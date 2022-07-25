import { InputContainer } from "./styles";


interface InputCheckoutProps {
    placeholder: string;
    type: string;
    widthInput: string;
}

export function InputCheckout({type,widthInput,placeholder}:InputCheckoutProps){
    return (
            <InputContainer type={type} placeholder={placeholder} widthInput={widthInput} />
    )
}