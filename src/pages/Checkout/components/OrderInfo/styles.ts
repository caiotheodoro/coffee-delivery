import styled from "styled-components";

export const ItemContainer = styled.div`

        display: flex;
        gap: 1.25rem;
        flex-direction: row;
        justify-content: space-between;

        h1 {
            font-family: "Roboto";
            font-weight: 400;
            font-size: 1rem;
        }

        h2 {
            font-family: "Roboto";
            font-weight: 700;
            font-size: 0.875rem;
        }

        span {
            display: flex;
            gap: 1rem;
        }
        
        border-bottom: 1px solid #E6E5E5;
        border-radius: 6px 0px 0px 6px;
        padding-bottom: 2rem;
        margin-bottom: 2rem;

`


const BaseButton = styled.button`
        border: 0;
        border-radius: 6px;
        display: flex;
        padding: 0.5rem;
        justify-content: flex-start;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
        gap: 0.75rem;
        
        h1 {
            font-family: "Roboto";
            font-weight: 400;
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




export const CounterButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['base-button']};
  font-size: 0.875rem;
  padding: 8px;
  svg {
    color: ${({ theme }) => theme['purple']};

    
    :hover {
        color: ${({ theme }) => theme['purple-dark']};
    }
}

  `


export const RemoveButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    padding: 0px 8px;
    width: 100%;
    font-size: 0.625rem;
    svg {
        color: ${({ theme }) => theme['purple']};
    }
    
`


export const PricingContainer = styled.div`
display: flex;
flex-direction: column;

div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    span {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
    }
    h2 {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 0.875rem;
    }

    h1 {
        font-size: 1.25rem;
        font-family: "Roboto";
        font-weight: 700;
    }
    
}
`


export const ConfirmPaymentButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme['yellow']};
    color: ${({ theme }) => theme['white']};
    padding: 12px 8px;
    justify-content: center;
    width: 100%;
    font-size: 0.875rem;
  
    
`
