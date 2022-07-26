import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2.5rem 10rem;

`

const BaseContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;


    h1:first-child {
        margin-bottom: 1rem;

    }
   

    font-family: "Baloo 2";
    h1 {
        font-weight: 700;
        font-size: 1.125rem;
    }
    
    article {
        padding: 40px;
        border-radius: 6px;
        background-color: ${({ theme }) => theme['base-card']};
        }

`

export const InfoContainer = styled(BaseContainer)`
    width: 55%;
    float: left;

        /* style only first h1 */
        

    article + article {
        margin-top: 0.875rem;
    }
  
`

export const OrderContainer = styled(BaseContainer)`
    width: 40%;
    float: right;


    article {
        border-radius: 6px 44px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;

        img {
            width: 4rem;
            height: 4rem;
        }
        
         

    }

    
    
`
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


export const OptionButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    padding: 1rem;
    width: 100%;

    svg {
        color: ${({ theme }) => theme['purple']};
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
