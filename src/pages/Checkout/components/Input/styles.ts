import styled from "styled-components";

interface InputProps {
    widthInput: string;
}

export const InputContainer = styled.input<InputProps>`
        padding: 12px;
        gap: 4px;
        width: ${props => props.widthInput};


        background: ${({ theme }) => theme['base-input']};

        border: 1px solid ${({ theme }) => theme['base-button']};
        border-radius: 4px;

        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-text']};
         
        ::placeholder {
            color: ${({ theme }) => theme['base-label']};
        }
    `