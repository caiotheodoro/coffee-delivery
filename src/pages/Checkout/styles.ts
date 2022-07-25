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
        font-family: "Baloo 2";
        font-weight: 700;
        font-size: 1.125rem;
        margin-bottom: 1rem;
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
    }

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
        padding: 1rem;
        width: 100%;
        
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