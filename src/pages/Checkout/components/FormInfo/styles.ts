import styled from 'styled-components'


export const InputPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;

    div {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.875rem;
    }

`

const BaseButton = styled.button`
        border: 0;
        border-radius: 6px;
        display: flex;
        padding: 0.5rem;
        justify-content: flex-start;
        align-items: center;
        font-weight: 400;
        cursor: pointer;
        gap: 0.75rem;

        h1 {
            font-family: "Roboto";
            font-weight: 400;
            font-size: 0.70rem;
        }

        p {
            font-size: 0.70rem;
        }

        :hover {
            background-color: ${({ theme }) => theme['base-hover']};
        }

        :focus {
            background-color: ${({ theme }) => theme['purple-light']};
            outline: 1px solid ${({ theme }) => theme['purple']};
        }

        
`


export const OptionButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    padding: 1rem;
    width: 100%;

    span {
        font-size: 0.75rem;
    }
    svg {
        color: ${({ theme }) => theme['purple']};
    }
    
    &.active {
        background-color: ${({ theme }) => theme['purple-light']};
        outline: 1px solid ${({ theme }) => theme['purple']};
    }
    
`

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

`

interface InputProps {
    widthInput: string;
}

export const InputCheckout = styled.input<InputProps>`
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

        :focus {
            outline: 1px solid ${({ theme }) => theme['purple']};
        }
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

`

