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